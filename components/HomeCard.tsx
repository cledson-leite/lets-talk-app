import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type HomeCardProps = {
  img: string
  title:string
  subtitle:string
  handleClick: () => void
  className: string
}

export default function HomeCard({img, title, subtitle, handleClick, className}: HomeCardProps) {
  return (
    <div className={cn(' px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer', className)} onClick={() => {console.log('box 1')}}>
        <div className='flex-center glassmorphism rounded-[10px] size-12'>
          <Image src={img} alt={title} width={27} height={27} />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>{title}</h1>
          <p className='text-lg font-normal'>{subtitle}</p>
        </div>
      </div>
  )
}
