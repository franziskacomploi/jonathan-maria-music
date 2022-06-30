import Head from 'next/head'
import React from 'react'
import layout from '../content/layout.json'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{layout.metaTitle}</title>
        <meta name="description" content={layout.metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <footer>
        <p>{layout.copyright}</p>
      </footer>
    </>
  )
}

export default Layout
