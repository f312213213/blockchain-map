import React from 'react'
import Link from 'next/link'

const NavItem = ({ text, path }) => {
  return (
      <Link href={path}>
        <a className={'uppercase'}>
          {text}
        </a>
      </Link>
  )
}

export default NavItem
