export const cleanErrorMessageReservado = (errorMessage: string) => {
  const regex = /ORA-20001:\s*(.*?)\s*(ORA-06512:|$)/
  const match = errorMessage.match(regex)

  if (match && match[1]) {
    return match[1].trim()
  }
  return errorMessage
}
