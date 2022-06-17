import React from 'react'

export const BackdropContext = React.createContext()

export const BackdropContextProvider = ({ children }) => {
  const [showBackdrop, setShowBackdrop] = React.useState(false)

  const openBackdrop = () => {
    setShowBackdrop(true)
  }

  const closeBackdrop = () => {
    setShowBackdrop(false)
  }

  return (
      <BackdropContext.Provider value={{ showBackdrop, openBackdrop, closeBackdrop }}>
        { children }
      </BackdropContext.Provider>
  )
}
