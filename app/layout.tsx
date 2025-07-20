
import './globals.css'
import { ReactNode } from 'react'
import ReduxProvider  from '@/provider/ReduxProvider'

export const metadata = {
  title: 'Daftar Teman',
  description: 'App Router + Redux Toolkit',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
