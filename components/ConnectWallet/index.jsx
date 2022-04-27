import React from 'react'

import { WalletContext } from '../../hooks/useWallet'

const ConnectWallet = () => {
  const { connectWallet } = React.useContext(WalletContext)

  return (
      <button className={'uppercase'} onClick={connectWallet}>
        connect
      </button>
  )
}

export default ConnectWallet
