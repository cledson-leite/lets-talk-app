import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { SignedIn, SignInButton, UserButton } from '@clerk/nextjs'

export default function NavBar() {
  return (
    <nav className='flex-between fixed z-50 w-full px-6 py-4 lg:px-10 bg-sidebar-primary'>
      <Link href={'/'} className='flex items-center gap-1'>
        <Image 
        className='max-sm:size-10'
          src={'/icons/logo.svg'}
          alt='logo'
          width={64}
          height={64}
        />
        <p className='text-[26px] font-extrabold max-sm:hidden'>Let's Talk</p>
      </Link>
      <div className='flex-between gap-5'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  )
}
