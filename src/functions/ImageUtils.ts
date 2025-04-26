import imageCompression, { Options } from 'browser-image-compression'
import { FileDataType } from '../utils/Interfaces/Upload'
import { getFirstItem } from '../helpers/ArrayUtilsFunc'
import { deleteNullValues } from '../constants/general'
import { UploadFile } from 'antd'
import { validateEmptyArray } from '../utils/generalFunctions'

export enum FileType {
  IMAGE = 'image',
  APPLICATION = 'application',
  PDF = 'PDF',
}

export type CompressImageResponseType = {
  inputSize: string
  inputUrl: string
  outputSize: string
  outputUrl: string
  outputFile: Blob
  progress: number
  targetName: string
}

const compressImage = async (
  image: File,
  options?: Options
): Promise<CompressImageResponseType> => {
  const targetName = options?.useWebWorker ? 'webWorker' : 'mainThread'
  const inputSize = (image.size / 1024 / 1024).toFixed(2)
  const inputUrl = URL.createObjectURL(image)

  let progress = 0

  const newOptions = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1024,
    ...options,
    onProgress: (progre: number) => (progress = progre),
  }

  const output = await imageCompression(image, (options = newOptions))

  return {
    inputSize,
    inputUrl,
    outputSize: (output.size / 1024 / 1024).toFixed(2),
    outputUrl: URL.createObjectURL(output),
    outputFile: output,
    progress,
    targetName,
  }
}

const getFileUse = (data: FileDataType): Blob | File => {
  return data?.fileUse || data?.outputFile
}

interface ICompressingImageResponse {
  compressedFiles: (Blob | File)[]
  fileDetails: FileDataType[]
}

const compressingImage = async (
  files: UploadFile[]
): Promise<ICompressingImageResponse> => {
  const fileDetails: FileDataType[] = []
  const compressedFiles: (Blob | File)[] = []

  for (const item of files) {
    const group = item?.type?.split('/')
    const fileType = getFirstItem(group)

    let fileProperties = item as FileDataType
    if (fileType === FileType.IMAGE) {
      const compressedImage = await compressImage(item?.originFileObj as File)
      fileProperties = { ...fileProperties, ...compressedImage }
    }

    const size = fileProperties?.outputFile?.size || fileProperties?.size
    const fileUse = fileProperties?.outputFile || fileProperties?.originFileObj
    const url = fileProperties?.outputUrl

    const file: FileDataType = deleteNullValues({
      ...fileProperties,
      size,
      fileUse,
      url,
    })

    fileDetails.push(file)
    compressedFiles.push(getFileUse(file))
  }

  return { compressedFiles: validateEmptyArray(compressedFiles), fileDetails }
}

export { compressImage, getFileUse, compressingImage }
