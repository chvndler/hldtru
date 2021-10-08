import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ChakraProvider, Container, Box, Stack, Skeleton } from "@chakra-ui/react"
import { AiOutlineInstagram } from 'react-icons/ai'
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialVimeo } from "react-icons/ti"
import Tiffany from '/public/tiffany_hd.jpg'
import Footer from '../components/Footer'



export default function Home() {
  return (

<div className={styles.container}>
  <Head>
    <title>hldtru®</title>
    <meta charset="UTF-8" />
    <meta name="description" content="East Coast based design label." />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
    <meta property="og:title" content="hldtru®" />
    <meta property="og:url" content="https://www.hldtru.com/" />
    <meta
      property="og:image"
      content="https://cdn.hldtru.space/assets/social.jpg"
    />
    <meta
      property="og:image:secure_url"
      content="https://cdn.hldtru.io/assets/social.jpg"
    />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1600" />
    <meta property="og:image:height" content="900" />
    <meta property="og:image:alt" content="Logo and site address" />
    <meta name="mobile-web-app-capable" content="yes" />

		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
		<link rel="stylesheet" href="https://cdn.hldtru.io/stylesheets/font.css" />
  </Head>

  <div className={styles.cover}>
    <video
      className={styles.video}
      playsInline
      autoPlay
      muted
      loop
      crossOrigin="true"
    >
      <source src="/truth.mp4" type="video/mp4" />
    </video>
  </div>

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
            fill="#fff"
          />
          <path
            d="M249.61,196.58a4.35,4.35,0,0,0,.76-2.63,4,4,0,0,0-1.35-3.22,5.65,5.65,0,0,0-3.79-1.16h-7v13.76h3.16v-5h2.7l3,5h3.62l-3.32-5.27A4,4,0,0,0,249.61,196.58Zm-3.11-1.1a2.83,2.83,0,0,1-1.86.54h-3.26v-4.08h3.26a2.83,2.83,0,0,1,1.86.54,1.81,1.81,0,0,1,.64,1.47A1.91,1.91,0,0,1,246.5,195.48Z"
            fill="#fff"
          />
          <path
            d="M250.57,185.81a13.27,13.27,0,0,0-12.78,0,12.47,12.47,0,0,0-4.64,4.48,12,12,0,0,0,0,12.32,12.45,12.45,0,0,0,4.64,4.47,13.2,13.2,0,0,0,12.78,0,12.45,12.45,0,0,0,4.64-4.47,12,12,0,0,0,0-12.32A12.47,12.47,0,0,0,250.57,185.81Zm2.78,15.76a10.75,10.75,0,0,1-18.34,0,9.88,9.88,0,0,1,0-10.24,10.45,10.45,0,0,1,3.87-3.74,10.87,10.87,0,0,1,10.6,0,10.45,10.45,0,0,1,3.87,3.74,9.88,9.88,0,0,1,0,10.24Z"
            fill="#fff"
          />
        </svg>
      </a>
    </Link>
  </div>

  <div className={styles.sidenav}>
    <a href="https://shop.hldtru.com/collections/new">New</a>
    <a href="https://shop.hldtru.com/collections/shorts">Shorts</a>
    <a href="https://shop.hldtru.com/collections/tees">Tees</a>
    <a href="https://shop.hldtru.com/collections/all">Shop All</a>
    <Link href="/hxouse">
      <a>HXOUSE</a>
    </Link>

    <Link href="/front">
      <a>Archive®</a>
    </Link>

    <Skeleton height="18px" isLoaded />

    <Link href="/early">
      <a>
        <h5>Early Access.</h5>
      </a>
    </Link>

    <Link href="/about">
      <a>
        <h5>Information.</h5>
      </a>
    </Link>

    <Link href="/subscribe">
      <a>
        <h5>Subscribe.</h5>
      </a>
    </Link>

    <ChakraProvider>
      <Box
        pos="relative"
        zIndex={30}
        bottom="0"
        bg="transparent"
        w="100%"
        pl={0}
        pt={6}
      >
        <Stack className={styles.side_links} direction="row">
          <Link
            href="https://instagram.com/hldtru"
            target="_blank"
            rel="noreferrer"
            passHref
          >
            <AiOutlineInstagram />
          </Link>

          <Link
            href="https://twitter.com/hldtru"
            target="_blank"
            rel="noreferrer"
            passHref
          >
            <TiSocialTwitter />
          </Link>
        </Stack>
      </Box>
    </ChakraProvider>
  </div>

  <Footer />
</div>


 )
}
