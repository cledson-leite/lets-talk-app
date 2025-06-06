import React, { ReactNode } from 'react'

type RootLayoutProsp = {
  children: ReactNode
}

export default function RootLayout({children}: RootLayoutProsp) {
  return (
    <main>
      {children}
    </main>
  )
}
