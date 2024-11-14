'use client'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Qgis2WebMap'), { ssr: false })

export default function MapWrapper() {
  return <Map />
}