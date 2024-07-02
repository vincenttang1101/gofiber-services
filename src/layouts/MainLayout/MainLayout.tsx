import { ReactNode } from 'react'

import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'

type MainLayoutProps = {
  children: ReactNode
}

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='text-primary-content bg-[#141E27] pt-[48px]'>
      <Header />
      <main className='mt-[60px] min-h-screen'>{children}</main>
      <Footer />
    </div>
  )
}
