'use client'

import { SignIn, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  if (isSignedIn) {
    return router.push('/');
  }
  return (
    <main className='flex items-center justify-center h-screen w-full'>
      <SignIn />
    </main>
  )
}
