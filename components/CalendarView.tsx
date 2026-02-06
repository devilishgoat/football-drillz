import { useState } from 'react'
import { Drill } from '@/lib/types'
import styles from './CalendarView.module.css'

interface CalendarViewProps {
  drills: Drill[]
}

export default function CalendarView({ drills }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    return { daysInMonth, startingDayOfWeek }
  }

  const getDrillsForDate = (date: Date) => {
    const dateStr = new Date(date).toISOString().split('T')[0]
    return drills.filter(drill => drill.date === dateStr)
  }

  const changeMonth = (delta: number) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1)
    )
  }

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate)
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <>
      <div className={styles.calendarNav}>
        <button onClick={() => changeMonth(-1)}>← Previous</button>
        <div className={styles.calendarMonth}>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <button onClick={() => changeMonth(1)}>Next →</button>
      </div>

      <div className={styles.calendar}>
        {dayNames.map(day => (
          <div key={day} className={styles.calendarHeader}>
            {day}
          </div>
        ))}
        {Array.from({ length: startingDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day
          )
          const dayDrills = getDrillsForDate(date)
          return (
            <div
              key={day}
              className={`${styles.calendarDay} ${
                dayDrills.length > 0 ? styles.hasDrills : ''
              }`}
            >
              <div className={styles.calendarDayNumber}>{day}</div>
              {dayDrills.length > 0 && (
                <div className={styles.calendarDayCount}>
                  {dayDrills.length} drill{dayDrills.length !== 1 ? 's' : ''}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
