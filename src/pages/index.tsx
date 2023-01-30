import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ncovergen</title>
        <meta name="description" content="Cover Generator for Notion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            NCoverGen is a cover generator for Notion
          </p>
        </div>

        <h1>usage</h1>
        <h2>endpoint</h2>
        <pre>
          /api/sans<br />
          /api/serif<br />
          /api/signika<br />
        </pre>
        <h2>parameters</h2>
        <ul>
          <li>text: The body of contents</li>
          <li>size: The size of font</li>
          <li>fg: The foreground color</li>
          <li>bg: The background color</li>
        </ul>
      </main>
    </>
  )
}
