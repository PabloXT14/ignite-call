export function getWeekDays(locale = 'pt-BR') {
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

    return weekDay.charAt(0).toUpperCase() + weekDay.slice(1)
  })
}
