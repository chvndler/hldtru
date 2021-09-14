import { useState } from "react"
import Cookies from "universal-cookie"
import consts from "/consts.js"

import styles from "../components/Essentials.module.css"
import { ChakraProvider } from "@chakra-ui/react"
import { InputGroup, Code, Heading, Text, Input, InputRightElement, Button, Container, Stack } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"

  const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState("")

  return (
<ChakraProvider>
  <div className={styles.canvas_form}>
    <div className={styles.container_form}>
      <div className={styles.center}>
        <Container maxW="xl" centerContent>
          <Heading as="h2" size="xl">
            Password.
          </Heading>
          <br />
          <InputGroup size="sm" w="100%">
            <Input
              focusBorderColor="lime"
              borderRadius="md"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              colorScheme="teal"
              size="xs"
              onClick={(e) => {
                e.preventDefault();
                const cookies = new Cookies();
                cookies.set(consts.SiteReadCookie, password, { path: "/" });
                window.location.href = redirectPath ?? "/";
              }}
            >
              {" "}
              Login
            </Button>
          </InputGroup>
        </Container>
      </div>
    </div>
  </div>
</ChakraProvider>


);
};

export default Login
