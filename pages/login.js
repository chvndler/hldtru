import Head from 'next/head'
import styles from "../components/Essentials.module.css"
import { ChakraProvider } from "@chakra-ui/react"
import { InputGroup, Code, Heading, Text, Input, InputRightElement, Button, Container, Stack } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"
import Cookies from "universal-cookie"
import Login from "../components/login"
import consts from "/consts.js"

export default function LoginPage({ hasReadPermission }) {
  if (hasReadPermission) {

    return (

<div className={styles.canvas_form}>
  <Head>
    <title>Logout</title>
  </Head>

<ChakraProvider>
      <div className={styles.container_form}>
        <div className={styles.center}>
          <Container maxW="xl" centerContent>
            <Heading as="h2" size="xl">
              Logout
            </Heading>
            <br />
              <Button colorScheme="gray" size="sm" className="Button"
							    onClick={(e) => {
                  e.preventDefault();
                  const cookies = new Cookies()
                  cookies.remove(consts.SiteReadCookie, { path: "/" })
                  window.location.href = "/login"
                }}
              >
                Logout
              </Button>
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

    )
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Login redirectPath="/" />
    </div>
  )
}
