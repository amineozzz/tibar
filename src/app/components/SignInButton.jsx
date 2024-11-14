'use client'

import { SignInButton as ClerkSignInButton } from '@clerk/nextjs'

export default function SignInButton() {
  return (
    <ClerkSignInButton>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md">
        Se connecter pour voir la carte
      </button>
    </ClerkSignInButton>
  )
}