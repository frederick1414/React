function getFirstItem<T>(arr: T[] | undefined): T | undefined {
  return arr?.length ? arr[0] : undefined
}

const move = <T>(array: T[], fromIndex: number, toIndex: number): T[] => {
  const newArray = [...array]
  const [element] = newArray.splice(fromIndex, 1)
  newArray.splice(toIndex, 0, element)
  return newArray
}

export { getFirstItem, move }
