import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Hxouse.module.css'

export default function Hxouse() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hldtru®</title>
				<meta name="description" content="Web Application for hldtru®" />
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>


      <footer className={styles.footer}>
      <Link href="/">
      <a>Contact</a>
      </Link>

      <Link href="/">
      <a>Terms & Conditions</a>
      </Link>

      <a href="https://instagram.com/hldtru" target="_blank" rel="noreferrer">Instagram</a>
      </footer>
    </div>
  )
}
