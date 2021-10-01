import Head from 'next/head'
import { ChakraProvider } from "@chakra-ui/react"
import Socialfooter from '../components/Socialfooter'
import Time from '../components/Time'
import styles from '../styles/Video.module.css'
import {
	Heading,
	Box,
	Stack,
	Text,
	Skeleton,
	Input,
	InputRightElement,
	Button,
	Container,
	VStack,
	Center,
	Square,
	Circle,
} from "@chakra-ui/react"

export default function Video() {
  return (
    <div className={styles.main}>
    <Head>
      <title>hldtru®</title>
      <meta name="description" content="Web Application for hldtru®" />
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
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="stylesheet" href="https://cdn.hldtru.io/stylesheets/font.css" />
    </Head>

<video className={styles.video} playsInline autoPlay muted loop>
  <source src="/flower.mp4" type="video/mp4" />
</video>

<ChakraProvider>
  <Time />
  <Center maxH="100vh" h="100vh" m="auto" pl="14px" pr="14px" pb="60px" w="100%" zIndex="2">
    <VStack w="100%">
      <Heading size="2xl">
        enter
      </Heading>




      <Text fontSize="sm">
        <i>
                power in <strong>truth</strong>
              </i> ®
      </Text>
    </VStack>
  </Center>

  <Socialfooter />

</ChakraProvider>

</div>
  )
}
