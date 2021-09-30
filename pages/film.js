import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/Essentials.module.css'
import Socialfooter from '../components/Socialfooter'
import ReactPlayer from 'react-player'
import {
	ChakraProvider,
	Container,
	SimpleGrid,
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


export default function Film() {
  return (

<div className={styles.canvas_fluid}>
  <Head>
    <title>Media.</title>
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
    <link rel="stylesheet" href="https://hldtru.io/stylesheets/font.css" />
  </Head>

  <ChakraProvider>
    <Nav />

    <Container pt="100" maxW="container.md">
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="tomato" height="120px">
			  	<div className={styles.vimeo}>
	        	<ReactPlayer url="https://vimeo.com/482886650" />
          </div>
        </Box>
        <Box bg="tomato" height="120px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </Container>
  </ChakraProvider>

  <Socialfooter />
</div>


  )
}
