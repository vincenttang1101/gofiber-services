import './globals.css'

import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const be_vietnam_pro = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-be-vietnam-pro'
})

export const metadata: Metadata = {
  title: 'Gofiber',
  description: 'Công ty công nghệ phần mềm - Gofiber'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${be_vietnam_pro.variable}`}>{children}</body>
    </html>
  )
}
