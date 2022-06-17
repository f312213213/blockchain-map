import React from 'react'

import { WalletContextProvider } from './useWallet'
import { BackdropContextProvider } from './useBackdrop'
import { SnackbarContextProvider } from './useSnackbar'
import LocationContextProvider from './useLocation'

const RootContext = ({ children }) => {
  return (
      <BackdropContextProvider>
        <SnackbarContextProvider>
          <WalletContextProvider>
            <LocationContextProvider>
              {children}
            </LocationContextProvider>
          </WalletContextProvider>
        </SnackbarContextProvider>
      </BackdropContextProvider>
  )
}

export default RootContext
