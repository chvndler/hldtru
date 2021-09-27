import Head from 'next/head'
import Image from 'next/image'
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




export default function Contact() {
  return (

<div className={styles.canvas_fluid}>
  <Head>
    <title>About.</title>
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
    <link
      rel="stylesheet"
      href="https://cdn.hldtru.io/stylesheets/font.css"
    />
  </Head>

<ChakraProvider>

<Nav />

  <Container pt="200" maxW="container.md">
  <Heading as="h4" size="lg">
    Contact us.
  </Heading>
  <Skeleton height="12px" isLoaded />

    <Text fontSize="sm">
      <strong>For wholesale inquiries, please contact:</strong>
    </Text>

    <Text fontSize="sm">
    <Link href="mailto:wholesale@hldtru.com" target="_blank" rel="noreferrer" passHref>
      wholesale@hldtru.com
    </Link>
    </Text>

    <Skeleton height="22px" isLoaded />

    <Text fontSize="sm">
      <strong>For press inquiries, please contact:</strong>
    </Text>
    <Text fontSize="sm">
    <Link href="mailto:media@hldtru.com" target="_blank" rel="noreferrer" passHref>
      media@hldtru.com
    </Link>
    </Text>

    <Skeleton height="22px" isLoaded />

    <Text fontSize="sm">
      <strong>For general inquiries, please contact:</strong>
    </Text>
    <Text fontSize="sm">
    <Link href="mailto:shop@hldtru.com" target="_blank" rel="noreferrer" passHref>
      shop@hldtru.com
    </Link>
    </Text>

<Skeleton height="40px" isLoaded />

      <Text fontSize="sm">
        <strong>instagram: </strong>
        <Link href="https://instagram.com/hldtru" target="_blank" rel="noreferrer" passHref>@hldtru
        </Link>
      </Text>

      <Text fontSize="sm">
        <strong>twitter: </strong>
        <Link href="https://twitter.com/hldtru" target="_blank" rel="noreferrer" passHref>@hldtru
        </Link>
      </Text>

      <Text fontSize="sm">
        <strong>facebook: </strong>
        <Link href="https://facebook.com/hldtru" target="_blank" rel="noreferrer" passHref>@hldtru
        </Link>
      </Text>



  </Container>
 </ChakraProvider>
 <Socialfooter />
</div>
 )
}
