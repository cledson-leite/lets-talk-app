'use client'

import React from 'react'

import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function SideBar() {
  const pathname = usePathname()
  return (
    <section className='sticky left-0 top-0 h-screen w-fit flex flex-col justify-between p-6 pt-28 text-white bg-gray-900 max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-col flex-1 gap-6'>
        {
          sidebarLinks.map((link) => {
            const active = pathname === link.route || pathname.startsWith(`${link.route}/`)

            return (
              <Link 
                href={link.route} 
                key={link.label} 
                className={cn('flex items-center gap-4 rounded-lg p-4 justify-start', active && 'bg-sky-500')}>
                <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
                <p className='text-lg font-semibold max-lg:hidden'>{link.label}</p>
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}
