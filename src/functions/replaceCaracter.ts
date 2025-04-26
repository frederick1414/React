export function reemplazarCaracter(
  texto: string,
  caracterOriginal: string,
  caracterNuevo: string
): string {
  const regex = new RegExp(caracterOriginal, 'g')
  return texto.replace(regex, caracterNuevo)
}
