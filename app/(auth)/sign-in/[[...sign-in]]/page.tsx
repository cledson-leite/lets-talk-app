import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <main className='flex items-center justify-center h-screen w-full'>
      <SignIn />
    </main>
  )
}
