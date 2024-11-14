'use client'

import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map() {
  useEffect(() => {
    // Check if window is defined (we're in the browser) and if the map doesn't already exist
    if (typeof window !== 'undefined' && !window.mapInitialized) {
      // Load the Leaflet library
      const map = L.map('map').setView([36.45, 9.5], 7)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map)

      // Add markers for important locations (example)
      L.marker([36.7333, 9.1833]).addTo(map)
        .bindPopup('Béja - Abattoir mobile')
      L.marker([36.5167, 8.7833]).addTo(map)
        .bindPopup('Thibar - Lycée Agricole')

      // Mark the map as initialized
      window.mapInitialized = true
    }
  }, [])

  return <div id="map" style={{ height: '400px', width: '100%' }} />
}