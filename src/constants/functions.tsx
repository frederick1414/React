import { AC_CONSULTAR, AC_EDITAR, AC_INSERTAR } from './parameters'
import {
  ApolloError,
  DocumentNode,
  TypedDocumentNode,
  useQuery,
} from '@apollo/client'
import {
  IMontoCaja,
  ISolFormalizacionMetodosPago,
} from '../utils/Interfaces/PaymentMethods'
import {
  IUserPrivileges,
  UseContextGeneral,
} from '../components/antDesing/ContextProvider'
import { deleteNullValues, systemMessage } from './general'

import { FormInstance } from 'antd/lib/form'
import { ISolFormalizacionPagosCajaDetalle } from '../utils/Interfaces'
import { ICliente, IStatusAcountCliente } from '../utils/Interfaces/Clientes'
import { QUERY_GET_USER_PERMISSION } from '../utils/Queries/Administrative'
import { showNotification } from '../utils/general'
import { useEffect } from 'react'

type distributedTypes = {
  paymentConcept?: IMontoCaja
  paymentMethod?: ISolFormalizacionMetodosPago
  cashPayments: ISolFormalizacionPagosCajaDetalle[]
  editRecord?: any
}

const distributed = ({
  paymentMethod,
  paymentConcept,
  cashPayments,
  editRecord,
}: distributedTypes) => {
  const record = paymentMethod ? paymentMethod : paymentConcept
  let MONTO = 0

  cashPayments?.map((item) => {
    let condition = new Boolean()
    const TASA = paymentMethod ? item?.TASA_CONV_MP : item?.TASA_MONEDA

    if (paymentMethod && !editRecord) {
      condition = item?.ID_METODO_PAGO === paymentMethod?.ID_DOCUMENTO
    }

    if (paymentMethod && editRecord) {
      condition =
        item?.ID_METODO_PAGO === paymentMethod?.ID_DOCUMENTO &&
        item?.SECUENCIA_PAGO !== editRecord?.SECUENCIA_PAGO
    }

    if (paymentConcept) {
      condition = item?.ID_CONCEPTO === paymentConcept?.ID_CARGO
    }

    if (condition) {
      if (record?.ID_MONEDA === 'RD' && record?.ID_MONEDA !== item?.ID_MONEDA) {
        MONTO += item?.MONTO_PAGO * TASA
      }

      if (record?.ID_MONEDA === 'US' && record?.ID_MONEDA !== item?.ID_MONEDA) {
        MONTO += item?.MONTO_PAGO / TASA
      }

      if (record?.ID_MONEDA === item?.ID_MONEDA) {
        MONTO += item?.MONTO_PAGO
      }
    }
  })

  return { MONTO }
}

type userPermissionTypes = {
  ID_ACCION?: number
  ID_OPERACION?: number
  ID_ROL?: number
  ID_PERSONAL?: string
}

const userPermission = (data: userPermissionTypes): boolean => {
  const condition = deleteNullValues(data)

  const { data: consulUserPermisData } = useQuery(QUERY_GET_USER_PERMISSION, {
    variables: { condition },
  })

  const OK: boolean = consulUserPermisData?.GetIsPersonalGrantted

  return OK
}

type userPermissionTypes1 = {
  ID_ACCION: number
  ID_OPERACION: number
  dataRolPers: any
}

const userPermissionInfo = ({
  ID_OPERACION,
  ID_ACCION,
  dataRolPers,
}: userPermissionTypes1) => {
  let OK = false

  dataRolPers?.ROLES?.map((item: any) => {
    item?.OPERACIONES?.map((chid: any) => {
      chid?.ACCIONES?.map((children: any) => {
        if (
          item?.ESTADO === 'A' &&
          chid?.ESTADO === 'A' &&
          children?.ESTADO === 'A'
        ) {
          if (
            chid?.ID_OPERACION === ID_OPERACION &&
            children?.ID_ACCION === ID_ACCION
          ) {
            OK = true
          }
        }
      })
    })
  })

  dataRolPers?.PERMISOS?.map((item: any) => {
    item?.ACCIONES?.map((chid: any) => {
      if (item?.ESTADO === 'A' && chid?.ESTADO === 'A') {
        if (
          item?.ID_OPERACION === ID_OPERACION &&
          chid?.ID_ACCION === ID_ACCION
        ) {
          if (chid?.ESTADO_ACCION === 'R') {
            OK = false
          } else if (chid?.ESTADO_ACCION === 'A') {
            OK = true
          }
        }
      }
    })
  })

  return OK
}

interface IUserAccess {
  ID_OPERACION: number
}

export const handleUserAccess = ({ ID_OPERACION }: IUserAccess) => {
  const { globalVariable, setGlobalVariable } = UseContextGeneral()
  const rolInsert = userPermission({
    ID_OPERACION,
    ID_ACCION: AC_INSERTAR,
  })

  const rolEdit = userPermission({
    ID_OPERACION,
    ID_ACCION: AC_EDITAR,
  })

  const rolConsult = userPermission({
    ID_OPERACION,
    ID_ACCION: AC_CONSULTAR,
  })

  const userPrivileges: IUserPrivileges = {
    insert: rolInsert,
    edit: rolEdit,
    consult: rolConsult,
  }

  useEffect(() => {
    setGlobalVariable({ ...globalVariable, userPrivileges })
  }, [rolInsert, rolEdit, rolConsult])

  return userPrivileges
}

interface defaultQueryProps<conditionType> {
  condition: conditionType
  query: DocumentNode | TypedDocumentNode<any, { condition: conditionType }>
}

export interface IQueryReturn<returnType> {
  refetch: () => void
  data: returnType
  error: ApolloError | undefined
  loading: Boolean
}

const defaultQuery = <conditionType, returnType>({
  condition,
  query,
}: defaultQueryProps<conditionType>): IQueryReturn<returnType> => {
  const { data, refetch, loading, error } = useQuery(query, {
    variables: { condition },
  })

  const firstKey = data ? Object.keys(data)[0] : ''

  const result: IQueryReturn<returnType> = {
    refetch,
    data: data ? data[firstKey] : undefined,
    error,
    loading,
  }

  return result
}

type ErrorWithFields = {
  errorFields: { [key: string]: unknown }[]
}

const isObjectWithFields = (error: unknown): error is ErrorWithFields => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'errorFields' in error &&
    Array.isArray((error as ErrorWithFields).errorFields)
  )
}

const errorCallback = (error: unknown) => {
  if (error instanceof Error) {
    showNotification({
      message: error.message,
      type: 'error',
    })
  } else if (isObjectWithFields(error) && error.errorFields.length) {
    showNotification({
      message: systemMessage.warningRequiredFields,
      type: 'warning',
    })
  } else {
    console.error('Error desconocido:', error)
    showNotification({
      message: `Error desconocido: ${String(error)}`,
      type: 'error',
    })
  }
}

const openDocumentViewer = (title: string, path: string) => {
  let newWindow = window.open('')
  newWindow?.document.write(`
  <html>
  <head>
      <style>
          .embed-cover {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 1.5%;
            right: 1.5%;
          }
  
          .wrapper {
            position: relative;
            width: 70%;
            height: 100%;
            margin: auto;
  
          }
          
          .general {
            position: relative;
            width: 100%;
            height: 100%;
          }
      </style>
      <style media="print">
          * { display: none }
      </style>
      <script type="text/javascript">
          function disableContextMenu() {
              window.frames["pdfframe"].contentDocument.oncontextmenu = function(){return true;};   
              var myFrame = document.getElementById('pdfframe');
              myFrame.window.eval('document.addEventListener("contextmenu", function (e) {e.preventDefault();}, false)');
              document.addEventListener("contextmenu", function (e) {e.preventDefault();}, false);
          }
  
      </script>
      <title>${title}</title>
  </head>
  <body onload="disableContextMenu();" oncontextmenu="return false">
      <div class="general">
      <div class="wrapper">
          <embed id="pdfframe" src="${
            path + '#toolbar=0'
          }" width="100%" height="100%" >
          </embed>
          <div class="embed-cover"></div>
      </div>
  </div>
  </body>
  
  </html>
  `)
}

type Icalculate = {
  installments: number
  amountRd: number
  amountUs: number
}

const sumAmountArrears = (data: IStatusAcountCliente[]): Icalculate => {
  let installments = 0
  let amountRd = 0
  let amountUs = 0

  data?.forEach(({ MONTO_ATRASO_RD, MONTO_ATRASO_US, CUOTAS_EN_ATRASO }) => {
    const monto_atraso = MONTO_ATRASO_RD
    installments += CUOTAS_EN_ATRASO || 0
    amountRd += monto_atraso || 0
    amountUs += MONTO_ATRASO_US || 0
  })

  return {
    installments,
    amountRd,
    amountUs,
  }
}
type Normalize = { value: string | number; onlyLetters?: boolean }

function removeLeadingSpaces(value: string | number): string | number {
  if (!value) return value
  const data = value?.toString()?.replace(/^\s+/g, '')
  if (typeof value === 'number') {
    return Number(data)
  }
  return data
}

function allowOnlyLettersAndSpaces(value: string | number): string | number {
  if (!value) return value
  const data = value?.toString()?.replace(/[^a-zA-Z ]/g, '')
  if (typeof value === 'number') {
    return Number(data)
  }

  return data
}

const customNormalize = ({ value, onlyLetters }: Normalize) => {
  if (!value) return value

  if (typeof value === 'string' || typeof value === 'number') {
    let newValue = removeLeadingSpaces(value)
    if (onlyLetters) {
      newValue = allowOnlyLettersAndSpaces(newValue)
    }

    return newValue
  }

  return value
}

function addSequence<T>(data: T[] = []): T[] {
  return data?.map((item, index) => ({
    ...item,
    SEC: index,
  }))
}

interface ErrorField {
  name: string[]
  errors: string[]
  warnings: string[]
}

interface ValidationError {
  errorFields: ErrorField[]
}

const extractFieldLabels = (errorFields: ErrorField[]): string[] => {
  return errorFields?.map((field) => {
    const error = field?.errors[0]
    const match = error?.match(/'([^']+)'/)
    return match ? match[1] : field?.name[0]
  })
}

const validateRequiredFields = async (form: FormInstance) => {
  try {
    await form.validateFields()
    return true
  } catch (errorInfo) {
    const errorFields = (errorInfo as ValidationError)?.errorFields

    const labelsRequire = extractFieldLabels(errorFields)

    labelsRequire?.slice(0, 3)?.forEach((label) => {
      showNotification({
        message: `Favor de llenar ${label} para continuar`,
        type: 'warning',
      })
    })

    return false
  }
}

export const getNameDocumentType = (cliente: ICliente) => {
  const tiposDocumento: Record<number, string> = {
    1: 'DOCUMENTO_IDENTIDAD',
    2: 'RNC',
    3: 'NO_PASAPORTE',
  }

  return tiposDocumento[cliente?.ID_TIPO_IDENT] || ''
}

export {
  distributed,
  userPermission,
  defaultQuery,
  userPermissionInfo,
  errorCallback,
  openDocumentViewer,
  sumAmountArrears,
  removeLeadingSpaces,
  allowOnlyLettersAndSpaces,
  customNormalize,
  addSequence,
  validateRequiredFields,
}
