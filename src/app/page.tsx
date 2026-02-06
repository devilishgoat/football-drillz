'use client'

import { useState, useEffect } from 'react'
import AuthScreen from '@/src/components/AuthScreen'
import MainApp from '@/src/components/MainApp'
import { User, Drill } from '@/src/lib/types'

const AUTH_KEY = 'drillbook_auth'
const DRILLS_KEY = 'drillbook_drills'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [drills, setDrills] = useState<Drill[]>([])

  useEffect(() => {
    const authData = localStorage.getItem(AUTH_KEY)
    if (authData) {
      const user = JSON.parse(authData)
      setCurrentUser(user)
      setIsAuthenticated(true)
      loadDrills(user.email)
    }
  }, [])

  const loadDrills = (userEmail: string) => {
    const allDrills = JSON.parse(localStorage.getItem(DRILLS_KEY) || '{}')
    setDrills(allDrills[userEmail] || [])
  }

  const saveDrills = (userEmail: string, userDrills: Drill[]) => {
    const allDrills = JSON.parse(localStorage.getItem(DRILLS_KEY) || '{}')
    allDrills[userEmail] = userDrills
    localStorage.setItem(DRILLS_KEY, JSON.stringify(allDrills))
  }

  const handleLogin = (email: string, password: string) => {
    const user: User = { email, name: email.split('@')[0] }
    localStorage.setItem(AUTH_KEY, JSON.stringify(user))
    setCurrentUser(user)
    setIsAuthenticated(true)
    loadDrills(email)
  }

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY)
    setCurrentUser(null)
    setIsAuthenticated(false)
    setDrills([])
  }

  const handleAddDrill = (drill: Omit<Drill, 'id' | 'createdAt'>) => {
    if (!currentUser) return

    const newDrill: Drill = {
      ...drill,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    }

    const updatedDrills = [...drills, newDrill]
    setDrills(updatedDrills)
    saveDrills(currentUser.email, updatedDrills)
  }

  const handleDeleteDrill = (drillId: number) => {
    if (!currentUser) return

    const updatedDrills = drills.filter(drill => drill.id !== drillId)
    setDrills(updatedDrills)
    saveDrills(currentUser.email, updatedDrills)
  }

  if (!isAuthenticated) {
    return <AuthScreen onLogin={handleLogin} />
  }

  return (
    <MainApp
      user={currentUser!}
      drills={drills}
      onLogout={handleLogout}
      onAddDrill={handleAddDrill}
      onDeleteDrill={handleDeleteDrill}
    />
  )
}
