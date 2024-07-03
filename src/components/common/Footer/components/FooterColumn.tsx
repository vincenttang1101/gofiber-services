import Image from 'next/image'

import { cn } from '@/libs/utils'

type FooterColumnProps = {
  classNameList?: string
  data: {
    title: string
    items: {
      icon: {
        src: string
        alt: string
      } | null
      text: string | null
    }[]
  }
}

export default function FooterColumn({ classNameList, data }: FooterColumnProps) {
  return (
    <div className='flex flex-col gap-[48px]'>
      <h4 className='text-[24px] uppercase'>{data.title}</h4>
      <ul className={cn('flex flex-col gap-[24px]', classNameList)}>
        {data.items.map((item, index) => (
          <li key={index} className='flex items-center gap-[12px]'>
            {item.icon && <Image src={item.icon.src} width={32} height={32} alt={item.icon.alt} />}
            {item.text && <span className='text-[18px] font-normal'>{item.text}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}
