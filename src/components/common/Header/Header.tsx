import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className='font-inter'>
      <div className='container'>
        <div className='flex items-center justify-between rounded-[24px] bg-[linear-gradient(71deg,_#141E27_-30.98%,_#203B53_103.04%)] p-[24px] text-white'>
          <figure>
            <Image src='/images/logo.webp' alt='Logo' width='200' height='60' />
          </figure>
          <ul className='flex gap-16 font-medium'>
            <li>
              <Link href='#!'>Sản phẩm</Link>
            </li>
            <li>
              <Link href='#!'>Hosting</Link>
            </li>
            <li>
              <Link href='#!'>Server</Link>
            </li>

            <li>
              <Link href='#!'>VPS</Link>
            </li>
            <li>
              <Link href='#!'>Thiết kế Website</Link>
            </li>
            <li>
              <Link href='#!'>Tin tức</Link>
            </li>
          </ul>
          <Button className='bg-primary-btn flex h-[48px] min-w-[165px] items-center gap-[24px] rounded-[24px] px-[24px] py-[12px] text-[16px]'>
            <span className='font-normal'>Tìm kiếm</span>
            <Image src='/icons/mynaui_search.svg' alt='Search' width={24} height={24} />
          </Button>
        </div>
      </div>
    </header>
  )
}
