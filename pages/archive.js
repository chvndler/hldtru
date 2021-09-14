import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Background from '../public/background.jpg'
import ArchiveLogo from '../public/ArchiveLogo.svg'

export default function Archive() {
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

			<Image src={Background} alt="cover image" layout="fill" objectFit="cover" placeholder="blur" quality="100" />

			<div className={styles.header}>
				<Link href="/">
				<a className={styles.svg}>
        <Image src={ArchiveLogo} alt="archive.logo" srcSet="0.5x" />
				</a>
				</Link>
			</div>

      <div className={styles.sidenav}>
        <a href="https://hldtru.us/collections/new" target="_blank" rel="noreferrer">DAYS OF TRUTH</a>
        <a href="https://hldtru.us/collections/shorts" target="_blank" rel="noreferrer">COENHAGEN© RACING</a>
        <a href="https://hldtru.us/collections/tees" target="_blank" rel="noreferrer">V2 TRAINING</a>
        <a href="https://hldtru.us/collections/all" target="_blank" rel="noreferrer">PRESEASON</a>
				<Link href="/hxouse">
				<a>POWERED BY TRUTH</a>
				</Link>

				<Link href="/archive">
				<a>COLLECTION 1</a>
				</Link>
          <br />

		    <Link href="/about">
	      <a><h5>About</h5></a>
	      </Link>

        <Link href="/">
        <a><h5>Home</h5></a>
        </Link>

        <Link href="/cover">
        <a><h5>Cover</h5></a>
        </Link>

				<Link href="/early">
				<a><h5>Early Access</h5></a>
				</Link>
      </div>





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
