import React from 'react'

const Page = ({ children }) => {
  return (
      <main className={'w-full min-h-screen pt-14'}>
        {children}
      </main>
  )
}

export default Page
