import React from 'react'
import { useJsApiLoader } from '@react-google-maps/api'
import { BackdropContext } from './useBackdrop'
import { SnackbarContext } from './useSnackbar'
import { LocationContext } from './useLocation'

export const MapContext = React.createContext()

const MapContextProvider = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
  })
  const [map, setMap] = React.useState(null)
  const [location, setLocation] = React.useState({
    lat: 24.943140,
    lng: 121.370734
  })
  const { openBackdrop, closeBackdrop } = React.useContext(BackdropContext)
  const { openSnackbar, closeSnackbar } = React.useContext(SnackbarContext)
  const { position, editLocation } = React.useContext(LocationContext)
  const markerRef = React.useRef({
    current: {
      marker: null
    }
  })
  return (
      <MapContext.Provider>

      </MapContext.Provider>
  )
}

export default MapContextProvider
