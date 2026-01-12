import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kando - Everything You Need',
  description: 'Shop fashion, electronics, home, beauty, and more at Kando',
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

