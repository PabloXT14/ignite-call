interface GetWeekDaysParams {
  locale?: string
  short?: boolean
}

export function getWeekDays({
  locale = 'pt-BR',
  short = false,
}: GetWeekDaysParams) {
  const formatter = Intl.DateTimeFormat(locale, { weekday: 'long' })

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return weekdays.map((day) => {
    const dateWhichSundayStartsInTheFirstDayOfTheMonth = new Date(
      Date.UTC(2021, 5, weekdays.indexOf(day)),
    )

    const weekDay = formatter.format(
      dateWhichSundayStartsInTheFirstDayOfTheMonth,
    )

    if (short) {
      return weekDay.substring(0, 3).toUpperCase()
    }

    return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
  })
}
