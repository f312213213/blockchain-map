import React from 'react'

import GoogleMapBase from '../components/GoogleMapBase'
import { WalletContext } from '../hooks/useWallet'

export default function Home () {
  const { wallet } = React.useContext(WalletContext)
  return (
    <div className={'w-full h-screen flex justify-center md:flex-row flex-col items-center'}>
      <GoogleMapBase className={'md:w-3/5 w-11/12 h-3/5 md:1/2 rounded-xl overflow-hidden'} />
      {
        wallet.address &&
          <h1>Hi, {wallet.address}</h1>
      }
    </div>
  )
}
