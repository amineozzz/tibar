'use client'

import { SignOutButton as ClerkSignOutButton } from '@clerk/nextjs'

export default function SignOutButton() {
  return (
    <ClerkSignOutButton>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md">
        Se déconnecter
      </button>
    </ClerkSignOutButton>
  )
}