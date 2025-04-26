import 'dayjs/locale/es'

import DatePicker, { DatePickerProps } from 'antd/lib/date-picker'
import React, { FunctionComponent, ReactElement, useContext } from 'react'

import { CustomFormContext } from './CustomForm'
import dayjs from 'dayjs'
import localeProp from 'antd/es/date-picker/locale/es_ES'

type disabledWeatherTypes = 'PAST' | 'PRESENT' | 'FUTURE' | null

type CustomDatePickerProps = DatePickerProps & {
  locale?: Record<string, unknown>
  disabledWeather?: disabledWeatherTypes
  disableFrom?: dayjs.Dayjs
  children?: React.ReactNode
}

const CustomDatePicker: FunctionComponent<CustomDatePickerProps> = ({
  locale = localeProp,
  disabledWeather,
  disableFrom,
  format = 'DD/MM/YYYY',
  ...props
}): ReactElement => {
  // const range = (start: number, end: number) => {
  //   const result: number[] = []
  //   for (let i = start; i < end; i++) {
  //     result.push(i)
  //   }
  //   return result
  // }

  // const showTime = { defaultValue: dayjs('00:00:00', 'HH:mm: a') }

  // const hours = new Date()?.getHours()

  // const disabledDateTime = () => ({
  //   // disabledHours: () => range(0, 24).splice(0, hours),
  //   // disabledMinutes: () => range(30, 60),
  //   // disabledSeconds: () => [55, 56],
  // })

  const context = useContext(CustomFormContext)

  let newProps: any = new Object()

  if (disableFrom) {
    newProps.disabledDate = (current: dayjs.Dayjs) =>
      current && current < dayjs(disableFrom)
  }
  if (disabledWeather === 'PAST') {
    newProps.disabledDate = (current: dayjs.Dayjs) =>
      current && current < dayjs().add(-1, 'days')
  }

  if (disabledWeather === 'PRESENT') {
    newProps.disabledDate = (current: dayjs.Dayjs) => {
      const condition = dayjs(current).format('DD-MM-YYYY')
      const dateDay = dayjs().format('DD-MM-YYYY')

      return current && condition === dateDay
    }
  }

  if (disabledWeather === 'FUTURE') {
    newProps.disabledDate = (current: dayjs.Dayjs) =>
      current && current > dayjs()
  }

  return (
    <DatePicker
      style={{ borderRadius: '5px', width: '100%' }}
      format={format}
      locale={locale}
      allowClear
      disabled={context?.readOnly}
      {...newProps}
      {...props}
    >
      {props.children}
    </DatePicker>
  )
}

export default CustomDatePicker
