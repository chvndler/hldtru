import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Archive.module.css'
import React from 'react';
import {
	ChakraProvider,
	SimpleGrid,
	Heading,
	Flex,
	Center,
	Square,
	Container,
	Box,
	Text,
	Image,
	AspectRatio
} from '@chakra-ui/react'










export default function Dot() {
  return (

<div className={styles.canvas_fluid}>
  {/*--- Head Begin ---*/}
  <Head>
    <title>Archive. Days of Truth™.</title>
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
      href="https://s3.us-east-2.amazonaws.com/truth.drop/fonts/font.css"
    />
  </Head>
  {/*--- Head End ---*/}

  <ChakraProvider>
    <Container maxW="container.xl" p="8px" flexWrap>
      <Flex color="white" h="400px">
        <Box flex="1" m="4px" borderRadius="12px">
          <Image
            src="https://bit.ly/naruto-sage"
            alt="naruto"
            w="100%"
            h="100%"
            borderRadius="12px"
            objectFit="cover"
          />
        </Box>

        <Box w="300px" m="4px" borderRadius="12px" color="black">
          <Heading m={2}>Archive</Heading>
          <Text m={2}>iusdhielifncawieufhohsedfojlaeidsfhoiwehsfdieufhd</Text>
        </Box>
      </Flex>

      <Flex color="white" h="300px" flexWrap>
        <Box w="400px" m="4px" borderRadius="12px" bg="tomato">
          <Image
            src="https://bit.ly/naruto-sage"
            alt="naruto"
            borderRadius="12px"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>

        <Box flex="2" m="4px" borderRadius="12px" bg="tomato">
          <Image
            src="https://cdn.hldtru.space/next.images/snow.jpg"
            alt="naruto"
            borderRadius="12px"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>

        <Box flex="1.5" m="4px" borderRadius="12px" bg="tomato">
          <Image
            src="https://cdn.hldtru.space/next.images/mountain.jpg"
            alt="naruto"
            w="100%"
            h="100%"
            borderRadius="12px"
            objectFit="cover"
          />
        </Box>
      </Flex>

      <Flex color="white" h="400px">
        <Box flex="1" m="4px" borderRadius="12px" bg="tomato">
          <Image
            src="https://bit.ly/naruto-sage"
            alt="naruto"
            w="100%"
            h="100%"
            borderRadius="12px"
            objectFit="cover"
          />
        </Box>

        <Box flex="1" m="4px" borderRadius="12px" bg="tomato">
          <Image
            src="https://cdn.hldtru.space/next.images/snow.jpg"
            alt="naruto"
            w="100%"
            h="100%"
            borderRadius="12px"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Container>
  </ChakraProvider>
</div>




 )
}
