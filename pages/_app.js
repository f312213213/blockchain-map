import React from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

import '../styles/globals.css'
import '../styles/nprogress.css'

import Meta from '../components/Meta'
import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RootContext from '../hooks/rootContext'
import Backdrop from '../components/Backdrop'
import Snackbar from '../components/Snackbar'

function App ({ Component, pageProps }) {
  const router = useRouter()
  React.useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [router])
  return (
      <RootContext>
        <Backdrop />
        <Meta />
        <Navbar />
        <Snackbar />
        <Page>
          <Component {...pageProps} />
        </Page>
        <Footer />
      </RootContext>
  )
}

export default App
