import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ChakraProvider, Box, Stack, Skeleton } from "@chakra-ui/react"
import { AiOutlineInstagram } from 'react-icons/ai'
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialVimeo } from "react-icons/ti"



export default function Home() {
  return (

<div className={styles.container}>
{ /*--- Head Begin ---*/ }
  <Head>
    <title>hldtru®</title>
    <meta name="description" content="Web Application for hldtru®" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
		<link rel="stylesheet" href="https://s3.us-east-2.amazonaws.com/truth.drop/fonts/font.css" />
  </Head>
{ /*--- Head End ---*/ }


  <div className={styles.backgroundImage}>
		<Image
		 src="https://cdn.hldtru.space/media/DOT-ORG-WEB.jpg"
		 alt="cover image"
		 layout="fill"
		 objectFit="cover"
		 quality="100" />
	</div>

{ /*--- Logo Header ---*/ }
  <div className={styles.header}>
    <Link href="/">
      <a className={styles.svg}>
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 275.08"
        >
          <rect width="300" height="275.08" fill="none" />
          <polygon
            points="67.25 22.62 111.73 61.96 13.32 194.6 143.97 175.56 212.02 243.54 268.23 22.62 67.25 22.62"
            fill="#000"
          />
          <path
            d="M249.61,196.58a4.35,4.35,0,0,0,.76-2.63,4,4,0,0,0-1.35-3.22,5.65,5.65,0,0,0-3.79-1.16h-7v13.76h3.16v-5h2.7l3,5h3.62l-3.32-5.27A4,4,0,0,0,249.61,196.58Zm-3.11-1.1a2.83,2.83,0,0,1-1.86.54h-3.26v-4.08h3.26a2.83,2.83,0,0,1,1.86.54,1.81,1.81,0,0,1,.64,1.47A1.91,1.91,0,0,1,246.5,195.48Z"
            fill="#000"
          />
          <path
            d="M250.57,185.81a13.27,13.27,0,0,0-12.78,0,12.47,12.47,0,0,0-4.64,4.48,12,12,0,0,0,0,12.32,12.45,12.45,0,0,0,4.64,4.47,13.2,13.2,0,0,0,12.78,0,12.45,12.45,0,0,0,4.64-4.47,12,12,0,0,0,0-12.32A12.47,12.47,0,0,0,250.57,185.81Zm2.78,15.76a10.75,10.75,0,0,1-18.34,0,9.88,9.88,0,0,1,0-10.24,10.45,10.45,0,0,1,3.87-3.74,10.87,10.87,0,0,1,10.6,0,10.45,10.45,0,0,1,3.87,3.74,9.88,9.88,0,0,1,0,10.24Z"
            fill="#000"
          />
        </svg>
      </a>
    </Link>
  </div>
{ /*--- Header End ---*/ }



{ /*--- SideNav Bar Start ---*/ }
  <div className={styles.sidenav}>
    <a
      href="https://hldtru.us/collections/new"
      target="_blank"
      rel="noreferrer"
    >
      New
    </a>
    <a
      href="https://hldtru.us/collections/shorts"
      target="_blank"
      rel="noreferrer"
    >
      Shorts
    </a>
    <a
      href="https://hldtru.us/collections/tees"
      target="_blank"
      rel="noreferrer"
    >
      Tees
    </a>
    <a
      href="https://hldtru.us/collections/all"
      target="_blank"
      rel="noreferrer"
    >
      Shop All
    </a>
    <Link href="/hxouse">
      <a>
        HXOUSE
      </a>
    </Link>

    <Link href="/archive">
      <a>Archive®</a>
    </Link>

    <Skeleton height="18px" isLoaded />

    <Link href="/locked">
      <a>
        <h5>Early Access</h5>
      </a>
    </Link>

    <Link href="/about">
      <a>
        <h5>Information</h5>
      </a>
    </Link>

    <Link href="/subscribe">
      <a>
        <h5>Subscribe</h5>
      </a>
    </Link>


  <ChakraProvider>
		<Box pos="relative" zIndex={30} bottom="0" bg="white" w="100%" pl={0} pt={4}>
			<Stack direction="row">

			<Link href="https://instagram.com/hldtru" target="_blank" rel="noreferrer" passHref>
				<AiOutlineInstagram />
			</Link>

			<Link href="https://twitter.com/hldtru" target="_blank" rel="noreferrer" passHref>
				<TiSocialTwitter />
			</Link>

			<Link href="https://vimeo.com/hldtru" target="_blank" rel="noreferrer" passHref>
				<TiSocialVimeo />
			</Link>

			</Stack>
		</Box>
	</ChakraProvider>

  </div>
{ /*--- SideNav End ---*/ }


{ /*--- Footer ---*/ }
  <footer className={styles.footer}>
    <Link href="/contact">
      <a>Contact</a>
    </Link>

    <Link href="/terms">
      <a>Terms & Conditions</a>
    </Link>

<Link href="/privacy">
    <a>Privacy Policy</a>
    </Link>
  </footer>
{ /*--- End Footer ---*/ }
</div>

  )
}
