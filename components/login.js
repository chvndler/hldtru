import { useState } from "react"
import Cookies from "universal-cookie"
import consts from "/consts.js"

import styles from "../components/Essentials.module.css"
import { ChakraProvider } from "@chakra-ui/react"
import { InputGroup, Code, Heading, Input, InputRightElement, Container, Stack } from "@chakra-ui/react"
import { Center, rightIcon, Button, ArrowForwardIcon } from "@chakra-ui/react"

  const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState("")

  return (
<ChakraProvider>
  <div className={styles.canvas_form}>
    <div className={styles.container_form}>
      <div className={styles.center}>
        <Container maxW="xl" centerContent>
          <Heading as="h2" size="xl">
            Enter password to shop.
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
					<br />
					</InputGroup>
						<Button
							colorScheme="gray"
							size="sm"
							spacing="4"
							variant="outline"
							onClick={(e) => {
								e.preventDefault()
                const cookies = new Cookies()
                cookies.set(consts.SiteReadCookie, password, { path: "/" })
                window.location.href = redirectPath ?? "https://hldtru.us"
							}}
						> Enter
             </Button>

        </Container>
      </div>
    </div>
  </div>
</ChakraProvider>


 );
};

export default Login
