import { useState, FormEvent } from 'react'
import styles from './AuthScreen.module.css'

interface AuthScreenProps {
  onLogin: (email: string, password: string) => void
}

export default function AuthScreen({ onLogin }: AuthScreenProps) {
  const [showLogin, setShowLogin] = useState(true)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
      alert('Please fill in all fields')
      return
    }

    onLogin(email, password)
  }

  return (
    <div className={styles.container}>
      <div className={styles.authScreen}>
        <div className={styles.authBox}>
          <div className={styles.logo}>DRILLBOOK</div>
          <div className={styles.tagline}>ELEVATE YOUR TRAINING</div>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" name="email" placeholder="coach@team.com" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input type="password" name="password" placeholder="••••••••" required />
            </div>
            <button type="submit" className={styles.btnPrimary}>
              {showLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <div className={styles.toggleAuth}>
            {showLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? 'Sign Up' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
