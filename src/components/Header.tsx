import { User } from '@/src/lib/types'
import styles from './Header.module.css'

interface HeaderProps {
  user: User
  onLogout: () => void
}

export default function Header({ user, onLogout }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>DRILLBOOK</div>
      <div className={styles.headerActions}>
        <div className={styles.userInfo}>Welcome, {user.name}</div>
        <button className={styles.btnSecondary} onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
