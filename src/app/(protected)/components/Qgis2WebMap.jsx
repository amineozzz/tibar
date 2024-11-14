'use client'

import React, { useEffect, useRef } from 'react'
import Script from 'next/script'

const QgisMap = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    const initMap = () => {
      if (typeof window.L !== 'undefined' && mapRef.current) {
        var map = L.map('map', {
          zoomControl: false,
          maxZoom: 28,
          minZoom: 1
        }).fitBounds([[35.304323887917406, 7.550162735237042], [37.59545051112073, 11.806916095071205]])

        var hash = new L.Hash(map)
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>')
        var autolinker = new Autolinker({ truncate: { length: 30, location: 'smart' } })
        var bounds_group = new L.featureGroup([])

        // Add your layer definitions here
        // Example:
        function pop_Gouvernorats_0(feature, layer) {
          // Your popup logic here
        }

        function style_Gouvernorats_0_0() {
          return {
            pane: 'pane_Gouvernorats_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(223,231,236,1.0)',
            interactive: true,
          }
        }

        map.createPane('pane_Gouvernorats_0')
        map.getPane('pane_Gouvernorats_0').style.zIndex = 400
        map.getPane('pane_Gouvernorats_0').style['mix-blend-mode'] = 'normal'
        var layer_Gouvernorats_0 = new L.geoJson(json_Gouvernorats_0, {
          attribution: '',
          interactive: true,
          dataVar: 'json_Gouvernorats_0',
          layerName: 'layer_Gouvernorats_0',
          pane: 'pane_Gouvernorats_0',
          onEachFeature: pop_Gouvernorats_0,
          style: style_Gouvernorats_0_0,
        })
        bounds_group.addLayer(layer_Gouvernorats_0)
        map.addLayer(layer_Gouvernorats_0)

        var osmGeocoder = new L.Control.Geocoder({
          collapsed: true,
          position: 'topleft',
          text: 'Search',
          title: 'Testing'
        }).addTo(map)

        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
          .className += ' fa fa-search'
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
          .title += 'Search for a place'

        // Add layer tree
        var overlaysTree = [
          { label: '<img src="legend/Gouvernorats_0.png" /> Gouvernorats', layer: layer_Gouvernorats_0 },
          // Add more layers to the tree...
        ]

        var lay = L.control.layers.tree(null, overlaysTree, {
          collapsed: true,
        })
        lay.addTo(map)

        // Clean up function
        return () => {
          map.remove()
        }
      }
    }

    // Call initMap after a short delay to ensure all scripts are loaded
    const timer = setTimeout(() => {
      initMap()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" strategy="beforeInteractive" />
      <Script src="/js/qgis2web_expressions.js" strategy="beforeInteractive" />
      <Script src="/js/leaflet-svg-shape-markers.min.js" strategy="beforeInteractive" />
      <Script src="/js/leaflet.rotatedMarker.js" strategy="beforeInteractive" />
      <Script src="/js/leaflet.pattern.js" strategy="beforeInteractive" />
      <Script src="/js/leaflet-hash.js" strategy="beforeInteractive" />
      <Script src="/js/Autolinker.min.js" strategy="beforeInteractive" />
      <Script src="/js/rbush.min.js" strategy="beforeInteractive" />
      <Script src="/js/labelgun.min.js" strategy="beforeInteractive" />
      <Script src="/js/labels.js" strategy="beforeInteractive" />
      <Script src="/js/leaflet-control-geocoder.Geocoder.js" strategy="beforeInteractive" />
      <Script src="/js/leaflet-measure.js" strategy="beforeInteractive" />
      <Script src="/data/Gouvernorats_0.js" strategy="beforeInteractive" />
      {/* Add more script imports for your data and additional functionalities */}
      <div id="map" ref={mapRef} style={{ width: '100%', height: '800px' }} />
    </>
  )
}

export default QgisMap