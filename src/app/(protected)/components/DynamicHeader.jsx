'use client'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'), { ssr: false })

export default function DynamicHeader() {
  return <Header />
}