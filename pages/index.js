import React from 'react'

import GoogleMapBase from '../components/GoogleMapBase'

export default function Home () {
  return (
    <div className={'w-full h-screen flex justify-center items-center'}>
      <GoogleMapBase className={'md:w-3/5 w-11/12 h-1/2 rounded-xl overflow-hidden'} />
    </div>
  )
}
