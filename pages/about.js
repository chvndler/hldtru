import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/Essentials.module.css'
import Socialfooter from '../components/Socialfooter'
import Nav from '../components/Nav'
import {
	ChakraProvider,
	Container,
	Box,
	Flex,
	Spacer,
	Badge,
	Center,
	Text,
	Button,
	Heading,
	Skeleton,
	Link,
} from "@chakra-ui/react"
import Grid from '@react-css/grid'


export default function About() {
  return (

<div className={styles.canvas_fluid}>
  <Head>
    <title>About.</title>
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

  <ChakraProvider>
    <Nav />

    <Container pt="200" maxW="container.md">
      <Heading as="h4" size="lg">
        About the brand.
      </Heading>
      <Skeleton height="8px" isLoaded />
      <Text fontSize="sm">
        <i>
          <strong>hldtru®</strong>
        </i>{" "}
        _ is an East Coast based design label. Our only mission is to push truth
        in everything. The only desire is to be fully in our truth, creating
        true happiness.
        <Skeleton height="12px" isLoaded />
        <Skeleton height="12px" isLoaded />
      </Text>
    </Container>
  </ChakraProvider>

  <Socialfooter />
</div>

 )
}
