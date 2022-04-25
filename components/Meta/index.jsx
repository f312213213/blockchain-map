import React from 'react'
import Head from 'next/head'

const Meta = ({ title = 'Block Map', description = 'help me!' }) => {
  return (
      <Head>
        <title>{title}</title>
        <meta property={'og:title'} content={title} key={'title'} />
        <meta name={'description'} content={description} />
      </Head>
  )
}

export default Meta
