import React from 'react'

export const LocationContext = React.createContext()

const LocationContextProvider = ({ children }) => {
  const [position, setPosition] = React.useState(null)

  const editLocation = (lat, lng) => {
    setPosition({
      lat,
      lng
    })
  }
  return (
      <LocationContext.Provider value={{ position, editLocation }}>
        {children}
      </LocationContext.Provider>
  )
}

export default LocationContextProvider
