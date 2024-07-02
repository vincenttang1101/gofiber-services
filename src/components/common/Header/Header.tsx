'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'

import { ProductMenu } from '@/components/common/Header'
import { Button } from '@/components/ui/button'
import { MegaMenus } from '@/constants/mega-menus'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { cn } from '@/libs/utils'

import { PrimaryButton } from '../PrimaryButton'

export default function Header() {
  const [isOpenProductMenu, setIsOpenProductMenu] = useState(false)

  const productMenuRef = useOutsideClick(() => {
    setIsOpenProductMenu(false)
  })

  return (
    <header>
      <div className='container'>
        <div
          className={cn(
            'bg-header-gradient relative z-[200] flex items-center justify-between rounded-[24px] p-[24px]',
            {
              'rounded-b-none': isOpenProductMenu
            }
          )}
        >
          <Link href='/'>
            <Image src='/images/logo.webp' alt='Logo' width='200' height='60' />
          </Link>
          <ul className='hidden items-center gap-16 text-[16px] font-medium lg:flex'>
            {MegaMenus.map((menu) => (
              <li key={menu.parent_category}>
                {!menu.link ? (
                  <Fragment>
                    <Button
                      variant='ghost'
                      className='hover:text-primary-content flex items-center gap-2 hover:bg-transparent'
                      onClick={() => setIsOpenProductMenu(!isOpenProductMenu)}
                    >
                      <h2 className='text-[16px] font-medium'>{menu.parent_category}</h2>
                      {isOpenProductMenu ? (
                        <Image
                          src='/icons/arrow-down.svg'
                          alt='Arrow Up'
                          width={20}
                          height={30}
                          className='rotate-180'
                        />
                      ) : (
                        <Image
                          src='/icons/arrow-down.svg'
                          alt='Arrow Down'
                          width={20}
                          height={30}
                        />
                      )}
                    </Button>
                    {isOpenProductMenu && (
                      <ProductMenu sub_categories={menu.sub_categories} ref={productMenuRef} />
                    )}
                  </Fragment>
                ) : (
                  <h2 className='text-[16px] font-medium'>
                    <Link href={menu.link}>{menu.parent_category}</Link>
                  </h2>
                )}
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-4'>
            <Image src='/icons/menu.svg' alt='Menu' width={30} height={30} className='lg:hidden' />
            <PrimaryButton className='hidden h-[48px] min-w-[165px] gap-[24px] sm:flex'>
              <span className='font-normal'>Tìm kiếm</span>
              <Image src='/icons/mynaui_search.svg' alt='Search' width={24} height={24} />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  )
}
