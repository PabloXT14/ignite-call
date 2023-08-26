import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { api } from '@/lib/axios'
import { getWeekDays } from '@/utils/get-week-days'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
  }>
}

type CalendarWeeks = CalendarWeek[]

interface BlockedDates {
  blockedWeekDays: number[]
}

interface CalendarProps {
  selectedDate: Date | null
  onDateSelected: (date: Date) => void
}

export function Calendar({ selectedDate, onDateSelected }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1) // pegando data atual e setando como dia 1 do mês atual
  })

  const router = useRouter()

  function handlePreviousMonth() {
    const previousMonth = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonth)
  }

  function handleNextMonth() {
    const nextMonth = currentDate.add(1, 'month')

    setCurrentDate(nextMonth)
  }

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  const shortWeekDays = getWeekDays({ short: true })

  const username = String(router.query.username)

  const { data: blockedDates } = useQuery<BlockedDates>({
    queryKey: ['blocked-dates', currentDate.get('year'), currentDate.get('month')],
    queryFn: async () => {
      const response = await api.get(`/users/${username}/blocked-dates`, {
        params: {
          year: currentDate.get('year'),
          month: currentDate.get('month'),
        }
      })

      return response.data
    }
  })

  const calendarWeeks = useMemo(() => {
    if (!blockedDates) {
      return []
    }

    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, index) => {
      return currentDate.set('date', index + 1)
    })

    const firstWeekDay = currentDate.get('day') // pegando dia da semana

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, index) => {
        return currentDate.subtract(index + 1, 'day') // como index começa em zero, precisamos subtrair 1 para pegar o dia da semana (1 = domingo, 7 = sábado)
      })
      .reverse()

    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth(),
    )

    const lastWeekDay = lastDayInCurrentMonth.get('day')

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1), // pegando quantidade de dias do proximo mês
    }).map((_, index) => {
      return lastDayInCurrentMonth.add(index + 1, 'day') // como index começa em zero, precisamos subtrair 1 para pegar o dia da semana (1 = domingo, 7 = sábado)
    })

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return { date, disabled: true }
      }),
      ...daysInMonthArray.map((date) => {
        return { 
          date,
          disabled:
            date.endOf('day').isBefore(new Date()) ||
            blockedDates.blockedWeekDays.includes(date.get('day')),
        } 
      }),
      ...nextMonthFillArray.map((date) => {
        return { date, disabled: true }
      }),
    ]

    // Organizando o array de dias em semanas
    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, index, original) => {
        const isNewWeek = index % 7 === 0 // se o index for divisível por 7 significa que chegou no sabado que é o final de uma semana e precisamos criar uma semana nova

        if (isNewWeek) {
          weeks.push({
            week: index / 7 + 1,
            days: original.slice(index, index + 7), // pegando os 7 dias da semana atual
          })
        }

        return weeks
      },
      [],
    )

    return calendarWeeks
  }, [currentDate, blockedDates])

  //console.log(calendarWeeks)

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="Next month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarWeeks.map(({ week, days }) => {
            return (
              <tr key={week}>
                {days.map(({ date, disabled }) => {
                  return (
                    <td key={date.toString()}>
                      <CalendarDay
                        onClick={() => onDateSelected(date.toDate())}
                        isToday={date.isSame(dayjs(), 'day')}
                        disabled={disabled}
                      >
                        {date.get('date')}
                      </CalendarDay>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
