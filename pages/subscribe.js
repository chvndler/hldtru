import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { ChakraProvider } from "@chakra-ui/react"
import { InputGroup, Code, Heading, Text, Input, InputRightElement, Button, Container, Stack } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"
import styles from '../styles/Subscribe.module.css'


export default function Home() {
  return (

		<div className={styles.container}>
			<Head>
				<title>hldtru®</title>
				<meta name="description" content="Web Application for hldtru®" />
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

		<div className={styles.container}>
	      <Script
				  src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Public API Key"
					strategy="beforeInteractive"
				/>




			<ChakraProvider>
			      <div className={styles.container_form}>
			        <div className={styles.center}>
			          <Container maxW="xl" centerContent>
			            <Heading as="h2" size="xl">
			              Subscribe.
			            </Heading>
			            <br />
                  <div className="klaviyo-form-WfEhm2"></div>
			            <br />
			            <br />
			            <Text fontSize="sm">
			              <i>
			                power in <strong>truth</strong>
			              </i>
			              ®
			            </Text>
			          </Container>
			        </div>
			      </div>
						</ChakraProvider>







</div>
</div>

  )
}
