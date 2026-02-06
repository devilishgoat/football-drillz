import { Drill } from '@/lib/types'
import styles from './DrillsList.module.css'

interface DrillsListProps {
  drills: Drill[]
  onDelete: (drillId: number) => void
}

export default function DrillsList({ drills, onDelete }: DrillsListProps) {
  if (drills.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyStateIcon}>⚽</div>
        <div className={styles.emptyStateText}>
          No drills scheduled yet. Create your first drill to get started!
        </div>
      </div>
    )
  }

  const sortedDrills = [...drills].sort(
    (a, b) =>
      new Date(a.date + ' ' + a.time).getTime() -
      new Date(b.date + ' ' + b.time).getTime()
  )

  return (
    <>
      {sortedDrills.map(drill => (
        <div key={drill.id} className={styles.drillItem}>
          <div className={styles.drillHeader}>
            <div>
              <div className={styles.drillTitle}>{drill.title}</div>
              <div className={styles.drillDate}>
                {new Date(drill.date).toLocaleDateString('en-US', {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
            </div>
            <div className={styles.drillActions}>
              <div className={styles.drillTime}>
                {drill.time}
                {drill.duration && ` (${drill.duration}min)`}
              </div>
              <button
                className={styles.btnDelete}
                onClick={() => onDelete(drill.id)}
              >
                Delete
              </button>
            </div>
          </div>
          {drill.description && (
            <div className={styles.drillDescription}>{drill.description}</div>
          )}
          {drill.tags.length > 0 && (
            <div className={styles.drillTags}>
              {drill.tags.map(tag => (
                <div key={tag} className={styles.drillTag}>
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  )
}
