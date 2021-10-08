import Head from 'next/head'
import { Image } from "@chakra-ui/react"
import Link from 'next/link'
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
} from "@chakra-ui/react"
import Grid from '@react-css/grid'




export default function Pack() {
  return (

<div className={styles.canvas_fluid}>
  <Head>
    <title>Short Packs.</title>
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

    <Container pt="100" pb="100" maxW="container.md">
      <Heading as="h4" size="lg">
        Short Packs.
      </Heading>
      <Skeleton height="12px" isLoaded />

      <Text fontSize="sm">
        <strong>1</strong> Add 2 DOT© Shorts to your cart. These can be any two
        colors, or the same.
      </Text>
      <Skeleton height="12px" isLoaded />
      <Text fontSize="sm">
        <strong>2</strong> The pack discount will be{" "}
        <strong>
          <i>automatically</i>
        </strong>{" "}
        applied to your order during checkout. No codes necessary.
      </Text>
      <Skeleton height="12px" isLoaded />
      <Text fontSize="sm">
        <strong>3</strong> The Pack discount{" "}
        <strong>
          <i>only applies</i>
        </strong>{" "}
        to the "Days of Truth" Shorts specifically, and cannot be paired with
        any other items.
      </Text>

      <Skeleton height="60px" isLoaded />

      <Text fontSize="xs">
        For questions or concerns, please contact sales@hldtru.com
      </Text>

      <Skeleton height="40px" isLoaded />

      <Box
        as="button"
        bg="#231f20"
        w="100%"
        p={1}
        borderRadius="10px"
        color="white"
        passHref
      >
        <Link href="https://shop.hldtru.com/collections/all">
          <a>
            <strong>SHOP NOW</strong>
          </a>
        </Link>
      </Box>

      <Box
        bg="black"
        w="100%"
        h="200px"
        p={0}
        mt="10px"
        mb="10px"
        borderRadius="10px"
        color="white"
      >
        <Image
          src="https://cdn.hldtru.space/assets/ShortsPacks17.jpg"
          borderRadius="10px"
          height="300px"
          width="100%"
          alt="pack"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+zHgAFeAJ5UEZb3wAAAABJRU5ErkJggg=="
        />
      </Box>

      <Skeleton height="60px" isLoaded />
    </Container>
  </ChakraProvider>
  <Socialfooter />
</div>

 )
}
