import React from 'react'
import Link from 'next/link'

const MenuLinks = ({ className }) => {
  return (
    <div className={className}>
      <Link href="/">
        <a className="m-2">ABOUT</a>
      </Link>
      <Link href="/music">
        <a className="m-2">MUSIC</a>
      </Link>
      <Link href="/contact">
        <a className="m-2">CONTACT</a>
      </Link>
    </div>
  )
}

export default MenuLinks
