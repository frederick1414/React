import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
  AudioOutlined,
  BankTwoTone,
  BarChartOutlined,
  CalculatorOutlined,
  CameraOutlined,
  CarTwoTone,
  CaretLeftOutlined,
  CarryOutOutlined,
  CheckCircleOutlined,
  CheckCircleTwoTone,
  CheckOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  CloudUploadOutlined,
  CommentOutlined,
  ControlOutlined,
  CopyOutlined,
  DeleteOutlined,
  DeleteTwoTone,
  DollarOutlined,
  DollarTwoTone,
  DownOutlined,
  DownloadOutlined,
  DropboxOutlined,
  EditOutlined,
  EditTwoTone,
  EnvironmentOutlined,
  ExportOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  FieldTimeOutlined,
  FileTextOutlined,
  FilterOutlined,
  FormOutlined,
  FullscreenOutlined,
  GlobalOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  InfoOutlined,
  LoadingOutlined,
  LockOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  MinusCircleOutlined,
  MinusOutlined,
  OrderedListOutlined,
  PicCenterOutlined,
  PlusCircleOutlined,
  PlusCircleTwoTone,
  PlusOutlined,
  PrinterOutlined,
  ProfileOutlined,
  ReloadOutlined,
  RiseOutlined,
  SaveOutlined,
  SaveTwoTone,
  SearchOutlined,
  SelectOutlined,
  SendOutlined,
  SettingOutlined,
  SolutionOutlined,
  StopOutlined,
  StopTwoTone,
  SwapOutlined,
  SyncOutlined,
  ToolOutlined,
  UndoOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UserOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";

import CustomButton from "../components/antDesing/CustomButton";
import React from "react";
import dayjs from "dayjs";

import styled from "styled-components";
import { showNotification } from "../utils/general";

export const FormContainer = styled.div`
  padding-left: 10px;
  padding-right: 20px;
`;
export const ContentContainer = styled.div`
  text-align: start;
  background-color: white;
  padding: 35px 20px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`;
export const DarkBlueButton = styled(CustomButton)`
  color: white;
  background-color: #002766;
  border: 50px;
  &:hover {
    background: #0050b3;
  }
  &:focus {
    background: #0050b3;
  }
`;

export const validateMessages = {
  required: `'$\{label}' es requerido.`,
  types: {
    email: `'$\{label}' no es un email válido.`,
    number: `'$\{label}' no es un número válido!`,
    string: `'$\{label}' no es un valor válido!`,
  },
  number: {
    len: `'$\{label}' debe tener exactamente '$\{len}' caracteres.`,
    min: `'$\{label}' debe tener mínimo '$\{min}' caracteres.`,
    max: `'$\{label}' no puede tener más de '$\{max}' caracteres.`,
    range: "${label} debe tener entre ${min}-${max} caracteres.",
  },
  string: {
    len: `'$\{label}' debe tener exactamente '$\{len}' caracteres.`,
    min: `'$\{label}' debe tener mínimo '$\{min}' caracteres.`,
    max: `'$\{label}' no puede tener más de '$\{max}' caracteres.`,
    range: "${label} debe tener entre ${min}-${max} caracteres.",
  },
};

export const daysToMonths = (number: number) => {
  if (number === 30) {
    return 1;
  }
  if (number === 60) {
    return 2;
  }
  if (number === 90) {
    return 3;
  }
  if (number === 120) {
    return 4;
  }
  if (number === 180) {
    return 6;
  }
  if (number === 360) {
    return 12;
  }
};

export const CustomIcons = {
  AudioOutlined: (props: any) => {
    const style = { fontSize: 18, color: "#1890ff", ...props.style };
    return <AudioOutlined {...props} style={style} />;
  },
  ArrowUpOutlined,
  CloudUploadOutlined,
  FullscreenOutlined,
  DeleteOutlined,
  PlusOutlined,
  PlusCircleTwoTone,
  PlusCircleOutlined,
  RiseOutlined,
  MenuOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MinusCircleOutlined,
  UploadOutlined,
  InfoCircleOutlined,
  FormOutlined,
  FileTextOutlined,
  LockOutlined,
  MinusOutlined,
  SendOutlined,
  EditOutlined,
  CameraOutlined,
  SearchOutlined,
  LoginOutlined,
  UserOutlined,
  DownloadOutlined,
  ReloadOutlined,
  PicCenterOutlined,
  LoadingOutlined,
  StopOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  UnorderedListOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  SwapOutlined,
  InfoOutlined,
  CalculatorOutlined,
  DollarOutlined,
  DownOutlined,
  FilterOutlined,
  CloseOutlined,
  UndoOutlined,
  SettingOutlined,
  SolutionOutlined,
  OrderedListOutlined,
  SaveOutlined,
  GlobalOutlined,
  ControlOutlined,
  BarChartOutlined,
  CaretLeftOutlined,
  CopyOutlined,
  CheckOutlined,
  ToolOutlined,
  CheckCircleTwoTone: (props: any) => {
    const style = { fontSize: 18, ...props.style };
    return (
      <CheckCircleTwoTone {...props} style={style} twoToneColor="#38b000" />
    );
  },
  ArrowRightOutlined,
  ArrowLeftOutlined,
  CommentOutlined,
  CarryOutOutlined,
  FieldTimeOutlined,
  HomeOutlined,
  SelectOutlined,
  ExportOutlined: (props: any) => {
    const style = { fontSize: 18, color: "#04a777", ...props.style };
    return <ExportOutlined {...props} style={style} />;
  },
  ZoomInOutlined: (props: any) => {
    const style = { fontSize: 18, color: "#2196F3", ...props.style };
    return <ZoomInOutlined {...props} style={style} />;
  },
  UserAddOutlined: (props: any) => {
    const style = { fontSize: 18, ...props.style };
    return <UserAddOutlined {...props} style={style} twoToneColor="#0096c7" />;
  },
  CarTwoTone: (props: any) => {
    const style = { fontSize: 18, color: "#003049", ...props.style };
    return <CarTwoTone style={style} twoToneColor="#003049" {...props} />;
  },

  DropboxOutlined: (props: any) => {
    const style = { fontSize: 18, ...props.style };
    return <DropboxOutlined {...props} style={style} twoToneColor="#fb8500" />;
  },
  BankTwoTone: (props: any) => {
    const style = { fontSize: 18, ...props.style };
    return <BankTwoTone {...props} style={style} twoToneColor="#606c38" />;
  },
  SaveTwoTone: (props: any) => {
    const style = { fontSize: 18, ...props.style };
    return <SaveTwoTone {...props} style={style} twoToneColor="#1890FF" />;
  },

  StopTwoTone: (props: any) => {
    const style = { fontSize: 18, ...props.style };
    return <StopTwoTone {...props} style={style} twoToneColor="#FF5733" />;
  },

  EditTwoTone: (props: any) => {
    const style = { fontSize: 18, ...props.style };
    return <EditTwoTone {...props} style={style} twoToneColor="#1890FF" />;
  },

  DeleteTwoTone: (props: any) => {
    const style = { fontSize: 18, ...props.style };
    return <DeleteTwoTone {...props} style={style} twoToneColor="#FF5733" />;
  },

  EnvironmentOutlined: (props: any) => {
    const style = { fontSize: 18, color: "#04a777", ...props.style };
    return <EnvironmentOutlined {...props} style={style} />;
  },

  ProfileOutlined: (props: any) => {
    const style = { fontSize: 18, color: "#04a777", ...props.style };
    return <ProfileOutlined {...props} style={style} />;
  },

  PrinterOutlined: (props: any) => {
    const style = { fontSize: 18, color: "#04a777", ...props.style };
    return <PrinterOutlined {...props} style={style} />;
  },

  DollarTwoTone: (props: any) => {
    const style = { fontSize: 18, ...props.style };
    return <DollarTwoTone {...props} style={style} twoToneColor="#38b000" />;
  },

  UserDeleteOutlined: (props: any) => {
    const style = { fontSize: 18, ...props.style };
    return <UserDeleteOutlined {...props} style={style} twoToneColor="#red" />;
  },

  SyncOutlined: (props: any) => {
    const style = { fontSize: 18, ...props.style };
    return <SyncOutlined {...props} style={style} twoToneColor="#orange" />;
  },
};

export const unitDetails = ["BARRICA", "JUEGO", "CAJA", "FARDOS", "PAQUETE"];

export const systemMessage = {
  confirmationModalForm: "¿Desea confirmar los datos del formulario?",
  closeModalExitWithoutSaving: "¿Desea salir sin guardar los datos?",
  closeModalExitCancelOperation: "¿Seguro que desea cancelar la operación?",
  disableRegistry: "¿Está seguro que desea inhabilitar este registro?",
  disableGuarantee: "¿Está seguro que desea inhabilitar esta garantía?",
  confirmTransfer: "¿Está seguro que desea confirmar transferencia?",
  enableRegistry: "¿Está seguro que desea habilitar este registro?",
  upgradeRegistry: "¿Desea actualizar los datos del formulario?",
  noOpenShift: "No tiene un turno aperturado",
  loseSession: "¿Está seguro que desea perder la sesión?",
  confirmApplyAction: "¿Está seguro que desea proceder con esta acción?",
  deleteRequiredDoc: "¿Está seguro que desea eliminar documento?",
  userNotAuthorized: "Usuario no tiene permiso para realizar esta operación.",
  unableLegalRep:
    "Esta acción es irreversible. \n ¿Está seguro que desea inactivar representante?",
  unableLoanCoDebtor:
    "Esta acción es irreversible. \n ¿Está seguro que desea inactivar garante?",
  errorSignIn:
    "Ocurrió un error al iniciar sesión, por favor verifique sus datos.",
  errorSignOfficerCostcenter:
    "Usuario no tiene permiso de realizar esta acción en esta sucursal.",
  errorContact: "Este contacto ya esta en la lista",
  deleteContact: "¿Está seguro de eliminar el registro?",
  deleteMovement: "¿Está seguro de eliminar transacción?",
  deleteReferenceRelated: "¿Está seguro de eliminar relacionado?",
  fieldsEmpty: "Llenar todos los campos requeridos.",
  changeDefaultAddress: "¿Desea cambiar a dirección principal?",
  unknounError: "Ha ocurrido un error desconocido.",
  successRegisterPerson: "Registro de persona completado exitosamente.",
  withoutRelatedTitle: "No Registró  Relacionado.",
  saveWithoutRelated: "¿Desea finalizar el registro sin agregar relacionados?",
  cannotClose: "No puede cancelar la operación.",
  missingAddress: "Debe agregar al menos una dirección.",
  missingPhone: "Debe agregar al menos un teléfono.",
  missingEmail:
    "No registró una dirección de Email o Red social. ¿Desea continuar?",
  emailFormatError: "Debe agregar un email valido.",
  leavingLocation:
    "Si cambia de pagina es posible que pierda la información de la pagina actual.",
  successfullOperation: "Operación Exitosa",
  defaultAddress: "No puede eliminar la dirección principal.",
  defaultPhone: "No puede eliminar el teléfono principal.",
  mailIsRecommended:
    "No ha seleccionado un correo electrónico, es recomendable seleccionarlo.",
  errorRelationship: "Ya existe una persona relacionada con este parentesco.",
  errorFailedOperation: "Operación Fallida",
  personAlreadyInList: "Ya esta persona esta agregada a la lista.",
  accountBalanceInvalid: "Monto disponible de la cuenta no es suficiente.",
  documentAlreadyRegistered: "El documento de identidad digitado ya existe.",
  docNoValid: "Documento de identidad no valido.",
  youngerAge:
    "El socio seleccionado es un menor de edad, por lo tanto es obligatorio elegir y/o crear un tutor",
  warningCancelRegistration: `La persona se guardará con datos incompletos y no estará disponible para usarse.
   Para poder usar esta persona, debe completar todos sus datos. ¿Desea salir?`,
  repeatedPartner:
    "El socio seleccionado ya esta registrado con el mismo tipo de relacion seleccionado.",
  selectPropsAnalisCred: "El prospecto  no posee un análisis de crédito.",
  errorTasaMoneda: "La tasa no ha sido registrada.",
  successOperations: "Se ha guardado correctamente",
  successAnulation: "Se ha anulado correctamente",
  warningRequiredFields: "Por favor llenar los campos requeridos.",
  warningRequiredVehicle: "Debe seleccionar un vehiculos de interes.",
  warningRequiredRegistration: "Debe seleccionar un registro.",
  warningTurnBox: "El turno en caja es obligatorio.",
  infoSessionExpired: "Su Sesión Ha Expirado!",
  characterLimit: "Ha superado el límite de caracteres permitidos.",
  confirmationOperation:
    "¿Estás seguro de que deseas proceder con la siguiente acción?",
  gpsDuplicate: "GPS ya está registrado en esta solicitud.",
  serviceTypeExists: "El Tipo De Servicio Ya Existe",
  noRetenciones: "Este Tipo De Servicios No Tiene Retenciones.",
  popConfir: "¿Estás seguro de realizar la siguiente acción?",
  resetPassConfirm:
    "¿Estás seguro que deseas restablecer la contraseña del usuario a la contraseña por defecto?",
  validateMileage: "Kilometraje digitado no puede ser menor al ya registrado.",
  successEraserImg: "Imagen Eliminada",
  fileLimitExceeded: `Has excedido el límite permitido de ${20} archivos.`,
  updateSuccess: "Actualización realizada con éxito",
  receiptSendSuccess: "Comprobante enviado correctamente.",
  receiptSendError: "No se ha podido enviar el comprobante.",
  rolControl:
    "No cuenta con los permisos necesarios para realizar esta acción !",
};

export type MaskType = {
  pasaporte: Array<string | RegExp>;
  doc_identidad: Array<string | RegExp>;
  telefono: Array<string | RegExp>;
  extension: Array<string | RegExp>;
  rnc: Array<string | RegExp>;
  meses: Array<string | RegExp>;
  email: Array<string | RegExp>;
  complete_phone: Array<string | RegExp>;
  date: Array<string | RegExp>;
  ip: Array<string | RegExp>;
};

export const maskedInput: MaskType = {
  pasaporte: [
    /[A-Z a-z]/,
    /[A-Z a-z]/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /[1,9]/,
  ],
  doc_identidad: [
    /[0-9]/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
  ],
  telefono: [/\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/],
  ip: [
    /[0-9]/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
  ],
  extension: [/[0-9]/, /\d/, /\d/, /\d/],
  rnc: [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  meses: [/[0-9]/, /|1[0-7]/],
  email: [/^[0-9]^/],
  date: [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
  complete_phone: [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
};

const deleteNullValues = (data: Object) => {
  const mainData: any = Object.fromEntries(
    Object.entries(data).filter(
      (value) => value[1] !== null && value[1] !== undefined
      // &&  isNaN(value[1])
    )
  );
  return mainData;
};

const numberFormat = (num: number, decimal = 2): string => {
  return num?.toLocaleString("en", {
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  });
};

export const idTipoTrans = {
  idTipoTransCap: "CAP",
  idTipoTransAcred: "ACRED",
  idTipoTransAcump: "ACUMP",
  idTipoTransSolf: "SOLF",
  idTipoTransResv: "RESV",
  idTipoTransApv: "APV",
  idTipoTransSfvr: "TV",
  idTipoTransRcm: "RCM",
  idTipoTransOtv: "OTV",
  idTipoTransRect: "RECT",
  idTipoTransRci: "RCI",
  idTipoTransCert: "CERT",
  idTipoTransMant: "MANT",
  idTipoTransReq: "REQ",
  idTipoTransSTP: "STP",
  idTipoTransFat: "FAT",
  idTipoTransFta: "FTA",
  idTipoTransDoc: "DOC",
  idTipoTransPv: "PV",
  idTipoTransScot: "SCOT",
  idTipoTransCot: "COT",
};

export type Steps = {
  description: string;
  content: React.ReactNode;
  title: string;
  disabled: boolean;
  noView: boolean;
};

export const TOLOWER = (value: string) => {
  return value.toLowerCase();
};

type arrayOrderTypes<Type> = {
  data: Type[];
  search: string;
  falling?: boolean;
};

const arrayOrder = <Type,>({
  data,
  search,
  falling,
}: arrayOrderTypes<Type>): Type[] => {
  let dataOrder: Type[] = [];
  if (data) {
    dataOrder = [...data]?.sort((a: any, b: any) => {
      if (a[search] < b[search]) return -1;
      if (a[search] > b[search]) return 1;

      return 0;
    });
  }
  return falling ? dataOrder?.reverse() : dataOrder;
};

const average = (arr: any[]) => arr.reduce((a, b) => a + b, 0) / arr.length;

const convertUndefinedNull = (data: Object) => {
  const mainData: any = Object.fromEntries(
    Object.entries(data)?.map((value) => {
      value[1] = value[1] === undefined ? null : value[1];
      return value;
    })
  );
  return mainData;
};

type objectComparisonTypes = {
  data: Object;
  compare: Object | any;
};

const objectComparison = ({ data, compare }: objectComparisonTypes) => {
  const newData: Object | any = new Object();

  Object.entries(data).forEach(([key, value]) => {
    if (`${compare[key]}`?.toLowerCase() !== `${value}`?.toLowerCase()) {
      newData[key] = value;
    }
  });

  const OK = Object.keys(newData).length !== 0;

  return { OK, data: newData };
};

type withoutRepeatsTypes = {
  data: any[];
  search: string;
};

const withoutRepeats = ({ data, search }: withoutRepeatsTypes) => {
  const newData = data?.filter((valorActual, indiceActual, arreglo) => {
    return (
      arreglo.findIndex(
        (valorDelArreglo) =>
          JSON.stringify(valorDelArreglo[search]) ===
          JSON.stringify(valorActual[search])
      ) === indiceActual
    );
  });

  return newData;
};

type rangeTypes = {
  start?: number;
  end: number;
  falling?: boolean;
};

const range = ({ start = 0, end, falling }: rangeTypes) => {
  const data = Array.from(Array(end - start + 1).keys())?.map((x) => x + start);

  return falling ? data?.reverse() : data;
};

type deleteDuplicateTypes = {
  data: any[];
  search?: string;
};

const deleteDuplicate = ({ data, search }: deleteDuplicateTypes) => {
  let newData;

  if (search) {
    newData = withoutRepeats({ data, search });
  } else {
    newData = data?.filter((x, i) => data?.indexOf(x) === i);
  }

  return newData;
};

export const decimals = {
  decimalsBox: 4,
  decimalsTwo: 2,
};

type orderTypes = "ASC" | "DESC";

type filterTableTypes<Type> = {
  data: Type[];
  search: string;
  text?: string;
  columnToOrder?: string;
  order?: orderTypes;
};

const filterTable = <Type extends {}>({
  data = [],
  search,
  text = search,
  columnToOrder = search,
  order = "ASC",
}: filterTableTypes<Type>) => {
  const datawithoutRepeats = withoutRepeats({ data, search });

  const newData = arrayOrder({
    data: datawithoutRepeats,
    search: columnToOrder,
    falling: order !== "ASC",
  });

  const filters = newData?.map((item) => {
    const newText = item[search] ? item[text] : "VACIOS";
    return { text: newText, value: item[search] };
  });

  const onFilter = (value: string | number, record: Object | any) => {
    const recordValue = record[search];
    return recordValue === value || (!recordValue && !value);
  };

  return {
    filters,
    onFilter,
  };
};

const filterTableGarant = <Type extends {}>({
  data,
  search,
}: filterTableTypes<Type>) => {
  const newData = withoutRepeats({ data, search });

  const filters = newData?.map((item) => {
    let today = dayjs(new Date());
    let fecha_garantia = dayjs(item?.FECHA_GARANTIA).add(3, "M");

    let diferentfecha = fecha_garantia.diff(today, "days");

    const newText = item[search] ? `Faltan ${diferentfecha} - Dias` : "VACIOS";

    return { text: newText, value: item[search] };
  });

  const onFilter = (value: string | number, record: Object | any) =>
    record[search]?.indexOf(value) === 0 || (!record[search] && !value);

  return {
    filters,
    onFilter,
  };
};

const filterShowTable = (columns: any[]) => {
  const data = columns?.filter((item) => !item?.notShowTable);

  return data;
};

const hasDecimals = (num: number) => {
  return num !== parseInt(num?.toFixed());
};

const handleRolMessage = (rol: boolean) => {
  if (!rol) {
    showNotification({
      message: systemMessage.rolControl,
      type: "warning",
    });

    return true;
  }

  return false;
};

export {
  deleteNullValues,
  numberFormat,
  arrayOrder,
  average,
  convertUndefinedNull,
  objectComparison,
  filterTable,
  filterTableGarant,
  range,
  deleteDuplicate,
  withoutRepeats,
  filterShowTable,
  hasDecimals,
  handleRolMessage,
};

export const statusGeneral = {
  active: "A",
  inactive: "I",
};

export const tipoTelefono = {
  CELULAR: "3",
  EMAIL: "14",
};
