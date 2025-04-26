export enum frequency {
  DAILY = 1,
  WEEKLY = 7,
  BIWEEKLY = 15,
  MONTHLY = 30,
  BIMONTHLY = 60,
  QUARTERLY = 90,
  FOUR_MONTHLY = 120,
  SEMIANNUALLY = 180,
  ANNUALLY = 360,
}

export enum time {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

interface IConvertFrequency {
  TIME?: time
  VALUE?: number
}

function ConvertFrequency(data: number): IConvertFrequency {
  switch (data) {
    case frequency.DAILY: {
      return { TIME: time.DAY, VALUE: 1 }
    }
    case frequency.WEEKLY: {
      return { TIME: time.WEEK, VALUE: 1 }
    }
    case frequency.BIWEEKLY: {
      return { TIME: time.WEEK, VALUE: 2 }
    }
    case frequency.MONTHLY: {
      return { TIME: time.MONTH, VALUE: 1 }
    }
    case frequency.BIMONTHLY: {
      return { TIME: time.MONTH, VALUE: 2 }
    }
    case frequency.QUARTERLY: {
      return { TIME: time.MONTH, VALUE: 3 }
    }
    case frequency.FOUR_MONTHLY: {
      return { TIME: time.MONTH, VALUE: 4 }
    }
    case frequency.SEMIANNUALLY: {
      return { TIME: time.MONTH, VALUE: 6 }
    }
    case frequency.ANNUALLY: {
      return { TIME: time.YEAR, VALUE: 1 }
    }
    default:
      return { TIME: undefined, VALUE: undefined }
  }
}

export { ConvertFrequency }
