import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/Essentials.module.css'
import Socialfooter from '../components/Socialfooter'
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
import Nav from '../components/Nav'


export default function Privacy() {
  return (

<div className={styles.canvas_fluid}>
  <Head>
    <title>Privacy Policy</title>
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
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
		<link rel="stylesheet" href="https://cdn.hldtru.io/stylesheets/font.css" />
  </Head>

  <ChakraProvider>
    <Nav />

    <Container pt="200" maxW="container.md">
      <Heading as="h4" size="lg">
        Privacy Policy
      </Heading>
      <Skeleton height="8px" isLoaded />
      <Text fontSize="sm">
        Under no circumstances will your personal information be shared or sold
        to third parties. By using our webstore, you agree to provide hldtru®
        with your email, for future marketing & updates such as: New releases,
        Sales, and all information that our shipping partners may provide to you
        regarding your order(s) from hldtru®.
        <Skeleton height="12px" isLoaded />
        <Text fontSize="sm">
          We respect your privacy, you have the option to opt-out at any time.
          <Skeleton height="12px" isLoaded />
          Manage (or){" "}
          <Link
            color="purple"
            href="https://manage.kmail-lists.com/subscriptions/unsubscribe?a=UFJYfF&g=SchTjq"
            target="_blank"
            rel="noreferrer"
          >
            Update Marketing Preferences.
          </Link>
        </Text>
      </Text>
    </Container>
  </ChakraProvider>

  <Socialfooter />
</div>

  )
}
