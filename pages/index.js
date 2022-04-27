import React from 'react'

import GoogleMapBase from '../components/GoogleMapBase'
import { WalletContext } from '../hooks/useWallet'
import Meta from '../components/Meta'

export default function Home () {
  const { wallet } = React.useContext(WalletContext)
  return (
      <>
        <Meta title={'首頁 | 救難の鏈'} description={'救難の鏈'} />
        <div className={'w-full h-screen flex justify-center md:flex-row flex-col items-center'}>
          <GoogleMapBase className={'md:w-3/5 w-11/12 h-3/5 md:1/2 rounded-xl overflow-hidden'} />
          {
              wallet.address &&
              <>
                <p>Hi, </p>
                <pre className={'text-sm'}>{wallet.address.substr(0, 5)}...{wallet.address.substr(38)}</pre>
              </>
          }
        </div>
      </>
  )
}
