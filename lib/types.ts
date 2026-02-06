export interface User {
  email: string
  name: string
}

export interface Drill {
  id: number
  title: string
  description: string
  date: string
  time: string
  duration: string
  tags: string[]
  createdAt: string
}

export interface DrillFormData {
  title: string
  description: string
  date: string
  time: string
  duration: string
  tags: string[]
}
