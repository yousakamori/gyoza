'use client'
import { signOut } from 'next-auth/react'

export function SignOutButton() {
  return (
    <button className='px-3 py-2 text-white bg-red-400 rounded-lg' onClick={() => signOut()}>
      ログアウトする
    </button>
  )
}
