import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DrillBook - Football Training Scheduler',
  description: 'Schedule and manage your football drills with tags and calendar view',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
