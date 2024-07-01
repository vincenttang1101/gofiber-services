import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { MainLayout } from '@/layouts/MainLayout'

export const metadata: Metadata = {
  title: 'Gofiber',
  description: 'Công ty công nghệ phần mềm - Gofiber'
}

export default function Layout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return <MainLayout>{children}</MainLayout>
}
