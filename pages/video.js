import Head from 'next/head'
import { ChakraProvider } from "@chakra-ui/react"
import Socialfooter from '../components/Socialfooter'
import Time from '../components/Time'
import styles from '../styles/Video.module.css'
import {
	Heading,
	Box,
	Flex,
	Spacer,
	Text,
	Skeleton,
	Button,
	Container,
	Center,
	Square,
	Circle,
} from "@chakra-ui/react"

export default function Video() {
  return (
<div className={styles.main}>

  <Head>
    <title>Video.</title>
    <meta charset="UTF-8" />
    <meta name="description" content="Web Application for hldtru®" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <meta property="og:title" content="hldtru®" />
    <meta property="og:url" content="https://www.hldtru.com/cover" />
    <meta property="og:image" content="https://cdn.hldtru.space/assets/social.jpg" />
    <meta property="og:image:secure_url" content="https://cdn.hldtru.io/assets/social.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1600" />
    <meta property="og:image:height" content="900" />
    <meta property="og:image:alt" content="Logo and site address" />
    <meta name="mobile-web-app-capable" content="yes" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="stylesheet" href="https://cdn.hldtru.io/stylesheets/font.css" />
  </Head>

  <ChakraProvider>
  <video className={styles.video} playsInline autoPlay muted loop>
    <source src="/horse.mp4" type="video/mp4" />
  </video>


    <Time />

    <Box width="100vw" pt="22%" m="auto" zIndex="2">

      <Flex color="white">
        <Box w="300px" h="10" textAlign="center">
          <div className={styles.link_left}>
            Webstore
          </div>
        </Box>
        <Spacer />
        <Box w="300px" h="10" textAlign="center">
          <div className={styles.logo}>
            HOLDTRUE®
          </div>
        </Box>
        <Spacer />
        <Box w="300px" h="10" textAlign="center">
          <div className={styles.link_right}>
            Archive
          </div>
        </Box>
      </Flex>

    </Box>

    <Socialfooter />

  </ChakraProvider>

</div>
  )
}
