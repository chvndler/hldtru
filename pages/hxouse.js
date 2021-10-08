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
import Socialfooter from '../components/Socialfooter'
import { ChakraProvider } from "@chakra-ui/react"
import {
	InputGroup,
	Code,
	Heading,
	Box,
	Stack,
	Skeleton,
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

import Hxouseword from '../components/Hxouselocked'


export default function Locked() {
	return (

<div className={styles.canvas_fluid}>
  <Head>
    <title>Hxouse.</title>
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
    <Center
      maxH="100vh"
      h="100vh"
      m="auto"
      pl="14px"
      pr="14px"
      pb="60px"
      w="100%"
    >
      <VStack w="100%">
        <div className={styles.heading}>HXOUSE®</div>

        <Hxouseword />

        <Text fontSize="sm">
          <i>
            an exploration of <strong>ideas</strong>
          </i>
          ®
        </Text>
        <Skeleton height="40px" isLoaded />
        <Text fontSize="sm">
          <strong>Coming soon.</strong>
        </Text>
      </VStack>
    </Center>

    <Box pos="fixed" zIndex={30} bottom="0" bg="white" w="100%" p={4}>
      <Stack direction="row" align="center">
        <AiOutlineInstagram />
        <TiSocialTwitter />
        <TiSocialVimeo />
        <DiGithubBadge />
      </Stack>
    </Box>
  </ChakraProvider>

  <Socialfooter />
</div>

  )
}
