import React from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'

import { SnackbarContext } from './useSnackbar'

export const WalletContext = React.createContext()

export const WalletContextProvider = ({ children }) => {
  const [wallet, setWallet] = React.useState({})
  const { openSnackbar, closeSnackbar } = React.useContext(SnackbarContext)

  const connectWallet = async () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.NEXT_PUBLIC_INFURA_ID
        }
      },
      binancechainwallet: {
        package: true
      },
      walletlink: {
        package: CoinbaseWalletSDK,
        options: {
          infuraId: process.env.NEXT_PUBLIC_INFURA_ID
        }
      }
    }

    const web3Modal = new Web3Modal({
      network: 'rinkeby',
      providerOptions,
      theme: 'dark',
      cacheProvider: false
    })
    web3Modal.connect()
      .then((instance) => {
        const provider = new ethers.providers.Web3Provider(instance)
        const signer = provider.getSigner()
        signer.getAddress()
          .then((result) => {
            setWallet({
              ...wallet,
              address: result
            })
            openSnackbar('success', '連結成功！')
          })
          .catch((e) => {
            openSnackbar('error', '連結失敗！')
          })
      })
      .catch(() => {
        openSnackbar('error', '連結失敗！')
      })
  }

  return (
      <WalletContext.Provider value={{ wallet, connectWallet }}>
        { children }
      </WalletContext.Provider>
  )
}
