import React from 'react'

const Page = ({ children }) => {
  return (
      <main className={'w-full min-h-screen'}>
        {children}
      </main>
  )
}

export default Page
