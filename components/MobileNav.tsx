'use client'

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function MobileNav() {
  const pathname = usePathname()
  return (
    <section className='w-full max-w-[36px]'>
      <Sheet>
        <SheetTrigger asChild>
          <Image
          className='cursor-pointer sm:hidden'
            src={'/icons/hamburger.svg'}
            alt='menu'
            width={36}
            height={36}
           />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-sidebar-primary'>
            <Link href={'/'} className='flex items-center gap-1'>
            <Image 
            className='max-sm:size-10'
              src={'/icons/logo.svg'}
              alt='logo'
              width={64}
              height={64}
            />
            <p className='text-[26px] font-extrabold'>Let's Talk</p>
          </Link>
          <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
              <section className='flex flex-col gap-6 h-full pt-16 text-white'>
              {
                  sidebarLinks.map((link) => {
                    const active = pathname === link.route || pathname.startsWith(`${link.route}/`)

                    return (
                      <SheetClose asChild key={link.label}>
                        <Link 
                          href={link.route} 
                          key={link.label} 
                          className={cn('flex items-center gap-4 rounded-lg p-4 w-full max-w-60', active && 'bg-sidebar-accent')}>
                          <Image src={link.imgUrl} alt={link.label} width={20} height={20} />
                          <p className='font-simebold'>{link.label}</p>
                        </Link>
                      </SheetClose>
                    )
                  })
                }
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}
