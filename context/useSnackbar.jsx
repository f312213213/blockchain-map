import React from 'react'

export const SnackbarContext = React.createContext()

const initialState = {
  show: false,
  type: null,
  text: null,
  identifier: Math.random()
}

export const SnackbarContextProvider = ({ children }) => {
  const [snackbarStatus, setSnackbarStatus] = React.useState(initialState)

  const openSnackbar = (type, text) => {
    setSnackbarStatus({
      show: true,
      type,
      text,
      identifier: Math.random()
    })
  }

  const closeSnackbar = () => {
    setSnackbarStatus(initialState)
  }

  return (
      <SnackbarContext.Provider value={{ snackbarStatus, openSnackbar, closeSnackbar }}>
        { children }
      </SnackbarContext.Provider>
  )
}
