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
	return (
<div className={styles.canvas_fluid}>
  <Head>
    <title>Subscribe.</title>
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
    <script
      type="text/javascript"
      async
      src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UFJYfF"
    ></script>
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
        <Heading>Subscribe.</Heading>

        <Skeleton height="20px" isLoaded />

        <FormControl id="email" width="350px" isRequired="true" size="small">
          <InputGroup size="sm">
            <Input
              type="email"
              size="sm"
              placeholder="Email address"
              focusBorderColor="lime"
              borderRadius="lg"
              pr="1rem"
            />
            <InputRightElement pr="0.2rem" width="4.5rem">
              <Button h="1.58rem" size="sm">
                Submit
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Skeleton height="40px" isLoaded />

        <Text fontSize="xs">
          <i>
            we respect your <strong>privacy</strong>
          </i>
          ®
        </Text>
        <Text fontSize="0.5rem">
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
