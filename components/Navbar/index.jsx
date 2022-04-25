import React from 'react'

import NavItem from './NavItem'

const index = () => {
  return (
      <nav className={'w-full p-4 bg-blue-300 fixed flex justify-around'}>
        <NavItem text={'map'} path={'/'} />
        <NavItem text={'read'} path={'/read'} />
        <NavItem text={'post'} path={'/post'} />
        <NavItem text={'connect'} path={'/connect'} />
      </nav>
  )
}

export default index
