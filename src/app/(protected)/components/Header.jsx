'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth, SignOutButton } from '@clerk/nextjs'
import SignInModal from './SignInModal'

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Description', href: '/description' },
  { name: "Zones d'élevage", href: '/zones-elevage' },
  { name: 'Circuit écotouristique', href: '/circuit-eco' },
  { name: 'Circuit valorisation viande', href: '/circuit-valorisation' },
]

export default function Header() {
  const { isSignedIn, isLoaded } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!isLoaded) {
    return null // or a loading spinner
  }

  return (
    <header className="bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src="/images/Agneaux NT.png" alt="Logo Noire de Thibar" width={80} height={80} className="rounded-full border-2 border-white mr-4 shadow-md" />
          <h1 className="text-2xl md:text-3xl font-bold">Noire de Thibar</h1>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-4">
            {isSignedIn && navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="px-3 py-2 rounded-full bg-green-800 hover:bg-green-900 transition duration-300 ease-in-out text-sm md:text-base">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              {isSignedIn ? (
                <SignOutButton>
                  <button className="px-3 py-2 rounded-full bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out text-sm md:text-base">
                    Se déconnecter
                  </button>
                </SignOutButton>
              ) : (
                <Link href="/login" className="px-3 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out text-sm md:text-base">
                  Se connecter
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <SignInModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}