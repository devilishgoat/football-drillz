import { User, Drill } from '@/lib/types'
import Header from './Header'
import DrillForm from './DrillForm'
import CalendarView from './CalendarView'
import DrillsList from './DrillsList'
import styles from './MainApp.module.css'

interface MainAppProps {
  user: User
  drills: Drill[]
  onLogout: () => void
  onAddDrill: (drill: Omit<Drill, 'id' | 'createdAt'>) => void
  onDeleteDrill: (drillId: number) => void
}

export default function MainApp({
  user,
  drills,
  onLogout,
  onAddDrill,
  onDeleteDrill,
}: MainAppProps) {
  return (
    <div className={styles.container}>
      <div className={styles.mainApp}>
        <Header user={user} onLogout={onLogout} />

        <div className={styles.contentGrid}>
          <div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Schedule Drill</div>
              <DrillForm onSubmit={onAddDrill} />
            </div>
          </div>

          <div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Training Calendar</div>
              <CalendarView drills={drills} />

              <div className={styles.drillsList}>
                <div className={styles.cardTitle}>Upcoming Drills</div>
                <DrillsList drills={drills} onDelete={onDeleteDrill} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
