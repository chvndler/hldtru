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
import Socialfooter from '../components/Socialfooter'
import {
	InputGroup,
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

import Password from '../components/Pswd'


export default function Locked() {
	return (
<div className={styles.canvas_fluid}>
  <Head>
    <title>Early Access.</title>
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
      href="https://hldtru.io/stylesheets/font.css"
    />
  </Head>

  <ChakraProvider>
    <Center
			bg="teal.200"
      maxH="100vh"
      h="100vh"
      m="auto"
      pl="14px"
      pr="14px"
      pb="60px"
      w="100%"
    >
      <VStack w="100%">
        <div className={styles.heading}>Early Access.</div>

        <Password />

        <Text fontSize="sm">
          <i>
            power in <strong>truth</strong>
          </i>
          ®
        </Text>
      </VStack>
    </Center>

    <Socialfooter />

  </ChakraProvider>
</div>


      )
    }
