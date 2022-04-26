import React from 'react'
import { GoogleMap, Marker, useJsApiLoader, GoogleMarkerClusterer } from '@react-google-maps/api'
import { position } from 'tailwindcss/lib/util/dataTypes'

const containerStyle = {
  width: '100%',
  height: '100%'
}

const GoogleMapBase = ({ className }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
  })
  const [map, setMap] = React.useState(null)
  const [location, setLocation] = React.useState({
    lat: 24.943140,
    lng: 121.370734
  })
  const [loading, setLoading] = React.useState(false)
  const markerRef = React.useRef({
    current: {
      marker: null
    }
  })

  const onLoad = React.useCallback(function callback (map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const changeHandler = () => {
    setLocation({
      lat: markerRef.current.marker.position.lat(),
      lng: markerRef.current.marker.position.lng()
    })
  }

  const getCurrentLocation = () => {
    setLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
          setLoading(false)
        }
      )
    }
  }

  React.useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
      <>
        <div className={`${className} relative`}>
          {
            loading &&
              <div className={'flex absolute justify-center items-center w-full h-full bg-gray-700 bg-opacity-50 z-50'}>
                <div className={'animate-spin w-5 h-5 z-50'}>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                </div>
              </div>
          }
          {
              isLoaded &&
              <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={location}
                  zoom={16}
                  options={{
                    zoomControl: true,
                    gestureHandling: 'greedy'
                  }}
              >
                <Marker
                    position={location}
                    draggable
                    ref={markerRef}
                    onDragEnd={changeHandler}
                />
              </GoogleMap>
          }
          <button className={'bg-indigo-300 bg-opacity-70 absolute p-2 rounded bottom-1 left-20 text-sm'} onClick={getCurrentLocation}>Get Location</button>
        </div>
        <h1 className={''}>{location.lng.toFixed(3)}, {location.lat.toFixed(3)}</h1>
      </>

  )
}

export default React.memo(GoogleMapBase)
