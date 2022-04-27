import React from 'react'

import { WalletContext } from '../../hooks/useWallet'

const ConnectWallet = () => {
  const { wallet, connectWallet } = React.useContext(WalletContext)

  return (
      <>
        {
          wallet.address
            ? <p>hi</p>
            : <button className={'uppercase'} onClick={connectWallet}>
                connect
              </button>
        }
      </>
  )
}

export default ConnectWallet
