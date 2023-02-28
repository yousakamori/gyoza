import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { SignOutButton } from '@/components/sign-out-button'
import { authOptions } from '@/lib/auth'

// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <main>
        <h1>not logged in</h1>
        <div className='flex items-center justify-between mt-6'>
          <Link href='/login' className='px-3 py-2 text-white rounded-lg bg-cyan-500'>
            ログインする
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      <h1>Hello {session.user.name}</h1>
      <p>your email is {session.user.email}</p>
      <div className='flex items-center justify-between'>
        <Link href='/editor' className='px-3 py-2 text-white rounded-lg bg-cyan-500'>
          editor
        </Link>
        <SignOutButton />
      </div>
    </main>
  )
}
