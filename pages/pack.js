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
    <meta name="description" content="Web Application for hldtru®" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="stylesheet" href="https://cdn.hldtru.io/stylesheets/font.css" />
  </Head>

  <ChakraProvider>

    <Nav />

    <Container pt="100" maxW="container.md">
      <Heading as="h4" size="lg">
        Short Packs.
      </Heading>
      <Skeleton height="12px" isLoaded />

      <Text fontSize="sm">
        <strong>1</strong> Add 2 DOT© Shorts to your cart. These can be any two colors, or the same.
      </Text>
      <Skeleton height="12px" isLoaded />
      <Text fontSize="sm">
        <strong>2</strong> The pack discount will be <strong><i>automatically</i></strong> applied to your order during checkout. No codes necessary.
      </Text>
      <Skeleton height="12px" isLoaded />
      <Text fontSize="sm">
        <strong>3</strong> The Pack discount <strong><i>only applies</i></strong> to the "Days of Truth" Shorts specifically, and cannot be paired with any other items.
      </Text>



      <Skeleton height="60px" isLoaded />

      <Text fontSize="xs">
        For questions or concerns, please contact sales@hldtru.com
      </Text>

      <Skeleton height="40px" isLoaded />

      <Box as="button" href="https://shop.hldtru.com/collections/all" bg="#231f20" w="100%" p={1} borderRadius="10px" color="white">
         <strong>SHOP NOW</strong>
      </Box>

      <Box bg="black" w="100%" h="200px" p={0} mt="10px" mb="10px" borderRadius="10px" color="white">
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




    </Container>
  </ChakraProvider>
  <Socialfooter />
</div>

 )
}
