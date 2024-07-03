import { Input } from '@/components/ui/input'
import { cn } from '@/libs/utils'

import { PrimaryButton } from '../../PrimaryButton'

type EmailForm = {
  className?: string
}

export default function EmailForm({ className }: EmailForm) {
  return (
    <form className={cn('flex rounded-[12px] bg-white py-[10px] pl-[24px] pr-[6px]', className)}>
      <Input
        className='border-none bg-transparent text-[16px] font-normal text-black shadow-none outline-none focus-visible:ring-0'
        placeholder='Enter your email'
      />
      <PrimaryButton>Submit</PrimaryButton>
    </form>
  )
}
