import React from 'react'

import { WalletContextProvider } from './useWallet'
import { BackdropContextProvider } from './useBackdrop'
import { SnackbarContextProvider } from './useSnackbar'

const RootContext = ({ children }) => {
  return (
      <BackdropContextProvider>
        <SnackbarContextProvider>
          <WalletContextProvider>
            {children}
          </WalletContextProvider>
        </SnackbarContextProvider>
      </BackdropContextProvider>
  )
}

export default RootContext
