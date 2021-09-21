import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../components/Essentials.module.css'
import Socialfooter from '../components/Socialfooter'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Time from '../components/Time'
import {
	InputGroup,
	Code,
	Heading,
	Box,
	Grid,
	Flex,
	Spacer,
	GridItem,
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



export default function Front() {
	const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

const theme = extendTheme({ breakpoints })
	return (

<div className={styles.canvas_fluid}>
  <Head>
    <title>Archive.</title>
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
      href="https://hldtru.io/stylesheets/font.css"
    />
  </Head>

  <ChakraProvider>
    <Time />
    <Container h="50vh" maxW="60%">
      <Center h="30%">
        <Heading fontSize="2xl">HOLDTRUE®</Heading>
        <Text fontSize="2xl">
          <i>A</i>rchive.
        </Text>
      </Center>
    </Container>
    <Text fontSize="xl" align="center" mb="10px">
      Archive is currently being updated.
      <br />
      Please check back soon.
    </Text>
    <Container
      maxW="70%"
      className={styles.midmenu}
      centerContent
      overflow="auto"
      whiteSpace="nowrap"
    >
      <Box
        width={{ base: "100%", sm: "100%", md: "100%" }}
        bg="transparent"
        p={2}
        color="white"
      >
        <Grid templateColumns="repeat(7, 1fr)" gap={2}>
          <Box
            as="button"
            w="100%"
            borderRadius="8"
            p="2"
            h="8"
            borderWidth="1px"
            borderColor="black"
            bg="transparent"
            color="black"
          >
            <Link href="/">
              <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                <a>DAYS OF TRUTH©</a>
              </Text>
            </Link>
          </Box>

          <Box
            as="button"
            w="auto"
            borderRadius="8"
            p="2"
            h="8"
            borderWidth="1px"
            borderColor="black"
            bg="transparent"
            color="black"
          >
            <Link href="/">
              <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                <a>COPENHAGEN® RACING</a>
              </Text>
            </Link>
          </Box>

          <Box
            as="button"
            w="auto"
            borderRadius="8"
            p="2"
            h="8"
            borderWidth="1px"
            borderColor="black"
            bg="transparent"
            color="black"
          >
            <Link href="/">
              <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                <a>V2 TRAINING</a>
              </Text>
            </Link>
          </Box>

          <Box
            as="button"
            w="auto"
            borderRadius="8"
            p="2"
            h="8"
            borderWidth="1px"
            borderColor="black"
            bg="transparent"
            color="black"
          >
            <Link href="/">
              <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                <a>POWERED BY TRUTH</a>
              </Text>
            </Link>
          </Box>

          <Box
            as="button"
            w="100%"
            borderRadius="8"
            p="2"
            h="8"
            borderWidth="1px"
            borderColor="black"
            bg="transparent"
            color="black"
          >
            <Link href="/">
              <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                <a>PRESEASON</a>
              </Text>
            </Link>
          </Box>

          <Box
            as="button"
            w="100%"
            borderRadius="8"
            p="2"
            h="8"
            borderWidth="1px"
            borderColor="black"
            bg="transparent"
            color="black"
          >
            <Link href="/">
              <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                <a>TRUTH BE TOLD</a>
              </Text>
            </Link>
          </Box>

          <Box
            as="button"
            w="100%"
            borderRadius="8"
            p="2"
            h="8"
            borderWidth="1px"
            mr="2px"
            borderColor="black"
            bg="transparent"
            color="black"
          >
            <Link href="/">
              <Text fontSize="xs" m="0" p="0" fontWeight="bold">
                <a>COLLECTION NAME</a>
              </Text>
            </Link>
          </Box>
        </Grid>
      </Box>
    </Container>

    <Socialfooter />
  </ChakraProvider>
</div>



  )
}
