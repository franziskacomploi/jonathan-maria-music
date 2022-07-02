import Head from 'next/head'
import React from 'react'
import layout from '../../content/layout.json'
import Menu from './Menu'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{layout.metaTitle}</title>
        <meta name="description" content={layout.metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Menu />
      </nav>

      <main>{children}</main>

      <footer className="relative text-small font-light text-center m-4 absolute bottom-0">
        <p>{layout.copyright}</p>
      </footer>
    </>
  )
}

export default Layout
