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
		<link rel="stylesheet" href="https://s3.us-east-2.amazonaws.com/truth.drop/fonts/font.css" />
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
        <div className={styles.heading}>
          Subscribe.
        </div>

				<InputGroup size="sm" ra>
	       <InputLeftAddon />
        	<Input borderRadius="md" focusBorderColor="lime" size="sm" type="email" placeholder="" />
       </InputGroup>

        <Text fontSize="sm">
          <i>
            power in <strong>truth</strong>
          </i>
          ®
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
