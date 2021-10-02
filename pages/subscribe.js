import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { render } from 'react-dom'
import { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import styles from '../components/Essentials.module.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialVimeo } from "react-icons/ti"
import { DiGithubBadge } from "react-icons/di"
import { subscribe } from "klaviyo-subscribe"
import { extendTheme } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import {
	InputGroup,
	InputLeftAddon,
	Code,
	Heading,
	Box,
	Skeleton,
	FormControl,
	FormHelperText,
	FormLabel,
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


export default function Subscribe() {

	const theme = extendTheme({
  colors: {
    brand: {
      100: "#FFF",
      200: "#000",
      300: "#5AFF15",
			400: "#9D75CB"
    },
  },
	components: {
		Button: {
			variants: {
				"hldtru": {
					bg: "#5AFF15",
					color: "#231f20",
					borderColor: "#f2f2f2",
					borderWidth: "1px",
				},
			},
		},
	},
})

	return (

<div className={styles.canvas_fluid}>
  <Head>
    <title>Subscribe.</title>
    <meta charset="UTF-8" />
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
    <script
      type="text/javascript"
      async
      src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UFJYfF"
    ></script>
  </Head>

  <ChakraProvider theme={theme}>
    <Center
      maxH="100vh"
      h="100vh"
      m="0"
      pl="0px"
      pr="0px"
      pb="60px"
      w="100%"
    >
      <VStack w="100%">
        <Heading>Subscribe.</Heading>
<div className="klaviyo-form-WfEhm2"></div>
        <Skeleton height="20px" isLoaded />

        <Text fontSize="xs">
          <i>
            we respect your <strong>privacy</strong>
          </i>
          ®
        </Text>
        <Text pt="10px" fontSize="0.6rem">
          <Link color="gray" className={styles.small_link} href="/privacy">
            <a>Privacy Policy</a>
          </Link>
        </Text>
      </VStack>
    </Center>

    <Box pos="fixed" zIndex={30} bottom="0" bg="transparent" w="100%" p={4}>
      <Center>
        <Stack direction="row">
          <AiOutlineInstagram />
          <TiSocialTwitter />
          <TiSocialVimeo />
          <DiGithubBadge />
        </Stack>
      </Center>
    </Box>
  </ChakraProvider>
</div>

  )
}
