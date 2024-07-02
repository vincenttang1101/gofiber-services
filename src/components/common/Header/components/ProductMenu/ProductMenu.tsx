'use client'

import Link from 'next/link'
import React, { forwardRef } from 'react'

import { type MegaMenus } from '@/constants/mega-menus'

type ProductMenuProps = {
  sub_categories: MegaMenus[][0]['sub_categories']
}

const ProductMenu = forwardRef<HTMLDivElement, ProductMenuProps>(({ sub_categories }, ref) => {
  return (
    <div ref={ref}>
      <div className='bg-header-gradient absolute inset-x-0 left-0 top-[108px] grid grid-cols-4 gap-4 rounded-bl-[24px] rounded-br-[24px] p-5 shadow-md'>
        {sub_categories.map((sub_category, index) => (
          <div key={index} className='flex gap-[50px]'>
            {index % 2 !== 0 && <div className='h-full w-[1px] bg-[rgba(255,255,255,0.20)]' />}
            <div>
              <h3 className='text-[16px] font-bold text-primary-btn'>{sub_category.name}</h3>
              <ul className='mt-[28px] flex flex-col gap-[18px] text-[14px] font-medium'>
                {sub_category.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.link}> {item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

ProductMenu.displayName = 'ProductMenu'

export default ProductMenu
