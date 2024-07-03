import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { type Banner } from '@/constants/banners'
import { cn } from '@/libs/utils'

import { PrimaryButton } from '../PrimaryButton'

interface BannerProps extends Banner {
  className?: string
  classNameImageWrapper?: string
}

export default function Banner({
  title,
  descs,
  imageConfigs,
  className,
  classNameImageWrapper
}: BannerProps) {
  return (
    <section className={cn('mb-[240px]', className)}>
      <div className='container relative'>
        <div className='flex flex-col items-center justify-between lg:flex-row'>
          <div className='w-[51%]'>
            <h2 className='w-full'>{title}</h2>
            <div className='mb-[48px] mt-[24px]'>
              {descs.map((desc, index) => (
                <p key={index} className='text-justify text-[20px] font-normal'>
                  {desc}
                </p>
              ))}
            </div>
            <PrimaryButton className='h-[48px] min-w-[183px]'>Tìm hiểu thêm</PrimaryButton>
          </div>

          <figure className={cn('relative w-[49%]', classNameImageWrapper)}>
            <Image
              src={imageConfigs.src}
              alt={imageConfigs.alt}
              width={imageConfigs.width}
              height={imageConfigs.height}
              className={`${imageConfigs.className} w-full !max-w-none`}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
