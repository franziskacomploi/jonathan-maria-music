import React from 'react'
import Link from 'next/link'

const MenuLinks = ({ className }) => {
  return (
    <div className={className}>
      <Link href="/">
        <a className="m-2">ABOUT</a>
      </Link>
      <Link href="/">
        <a className="m-2">MUSIK</a>
      </Link>
      <Link href="/">
        <a className="m-2">KONTAKT</a>
      </Link>
    </div>
  )
}

export default MenuLinks
