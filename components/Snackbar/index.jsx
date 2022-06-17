import React from 'react'
import { SnackbarContext } from '../../context/useSnackbar'
import SnackbarBase from './SnackbarBase'

const Snackbar = () => {
  const { snackbarStatus, closeSnackbar } = React.useContext(SnackbarContext)

  React.useEffect(() => {
    const autoHide = setTimeout(() => {
      closeSnackbar()
    }, 3000)
    return () => {
      clearTimeout(autoHide)
    }
  }, [snackbarStatus.identifier])

  return (
      <>
        {
          snackbarStatus.show &&
            <SnackbarBase type={snackbarStatus.type} text={snackbarStatus.text} />
        }
      </>
  )
}

export default Snackbar
