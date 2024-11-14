'use client'

import React, { useEffect, useRef } from 'react'

const QgisMapIframe = () => {
  const iframeRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = `${window.innerHeight}px`
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Set initial height

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src="/qgis_map/index.html"
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
      }}
      title="QGIS Map"
    />
  )
}

export default QgisMapIframe