import Head from 'next/head'
import Link from 'next/link'
import { ChakraProvider } from "@chakra-ui/react"
import { InputGroup, Code, Heading, Text, Input, InputRightElement, Button, Container, Stack } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"
import styles from '../components/Essentials.module.css'


	export default function Test() {
	  return (
   <div>
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


<ChakraProvider>
  <div className={styles.canvas_form}>
    <div className={styles.container_form}>
      <div className={styles.center}>
        <Container maxW="xl" centerContent>
          <Heading as="h2" size="xl">
            Early Access.
          </Heading>
          <br />
          <InputGroup size="sm" w="100%">
            <Input
              focusBorderColor="lime"
              borderRadius="md"
              type="password"
              placeholder="Enter password"
            />
          </InputGroup>
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
  </div>
</ChakraProvider>
</div>




  )
}
