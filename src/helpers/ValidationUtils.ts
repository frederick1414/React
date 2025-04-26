import { RuleObject } from 'antd/es/form'

const validateDigitCount =
  <Type>(maxDigits: number) =>
  (_: RuleObject, value: Type) => {
    if (value !== undefined && value !== null) {
      const digitCount = value.toString().length
      if (digitCount > maxDigits) {
        return Promise.reject(
          new Error(`El valor no puede tener más de ${maxDigits} dígitos.`)
        )
      }
    }
    return Promise.resolve()
  }

export { validateDigitCount }
