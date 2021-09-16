import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/Essentials.module.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialVimeo } from "react-icons/ti"
import { DiGithubBadge } from "react-icons/di"
import { ChakraProvider } from "@chakra-ui/react"
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
	return (

<div className={styles.canvas_fluid}>

  <Head>
    <title>Early Access.</title>
    <meta name="description" content="Web Application for hldtru®" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>
  <ChakraProvider>
    <Grid templateColumns="repeat(5, 1fr)" gap={4} m="auto">
      <GridItem colSpan={2} h="100vh" bg="tomato">
        <Flex>
          <Box w="auto" h="100vh" bg="white" p="12px" margin="auto">
            <Center h="100vh">WEBSTORE®</Center>
          </Box>
          <Spacer />
          <Box w="auto" h="100vh" bg="white" p="12px">
            <Center h="100vh">ARCHIVE</Center>
          </Box>
          <Spacer />
          <Box w="auto" h="100vh" bg="white" p="12px">
            <Center h="100vh">SHOP ALL</Center>
          </Box>
        </Flex>
      </GridItem>
    </Grid>



    <Box pos="fixed" zIndex={30} bottom="0" bg="white" w="100%" p={4}>
      <Stack direction="row">
        <AiOutlineInstagram />
        <TiSocialTwitter />
        <TiSocialVimeo />
        <DiGithubBadge />
      </Stack>
    </Box>



  </ChakraProvider>
</div>
  )
}
