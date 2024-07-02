import { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/libs/utils'

type PrimaryButtonProps = {
  children: ReactNode
  className?: string
}

export default function PrimaryButton({ children, className }: PrimaryButtonProps) {
  return (
    <Button
      className={cn(
        'flex items-center justify-center rounded-[24px] bg-primary-btn px-[24px] py-[12px] text-[16px] font-normal',
        className
      )}
    >
      {children}
    </Button>
  )
}
