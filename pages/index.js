import Head from 'next/head'
import home from '../content/home.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{home.metaTitle}</title>
        <meta name="description" content={home.metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{home.headline}</h1>
      </main>

      <footer>
        <p>{home.copyright}</p>
      </footer>
    </div>
  )
}
