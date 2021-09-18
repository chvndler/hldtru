import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/Essentials.module.css'
import Socialfooter from '../components/Socialfooter'
import {
	ChakraProvider,
	Container,
	Box,
	Flex,
	Spacer,
	Badge,
	Center,
	Text,
	Button,
	Heading,
	Skeleton,
	Link,
} from "@chakra-ui/react"
import Grid from '@react-css/grid'


export default function Privacy() {
  return (

<div className={styles.canvas_fluid}>
  <Head>
    <title>Privacy Policy</title>
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
  </Head>

  <ChakraProvider>

	<Flex>
	  <Box p="2" h="auto" width="300px" bg="transparent">
	    <Button size="md" h="22px" pl="3" pr="3" mr="1" border="1px" borderRadius="xl">Back</Button>
			<Button size="md" h="22px" pl="3" pr="3" mr="1" border="1px" borderRadius="xl">Shop</Button>
			<Button size="md" h="22px" pl="3" pr="3" border="1px" borderRadius="xl">Archive</Button>
	  </Box>
	  <Spacer />
	  <Box p="2" h="auto" w="100px" align="right" bg="transparent">
	    <Button size="md" h="22px" pl="3" pr="3" mr="1" border="1px" borderRadius="xl">Cart</Button>
	  </Box>
	</Flex>




    <Container pt="200" maxW="container.md">
      <Heading as="h4" size="lg">
        Privacy Policy
      </Heading>
      <Skeleton height="8px" isLoaded />
      <Text fontSize="sm">
        Under no circumstances will your personal information be shared or sold
        to third parties. By using our webstore, you agree to provide hldtru®
        with your email, for future marketing & updates such as: New releases,
        Sales, and all information that our shipping partners may provide to you
        regarding your order(s) from hldtru®.
        <Skeleton height="12px" isLoaded />
        <Text fontSize="sm">
          We respect your privacy, you have the option to opt-out at any time.
          <Skeleton height="12px" isLoaded />
          Manage (or){" "}
          <Link
            color="purple"
            href="https://manage.kmail-lists.com/subscriptions/unsubscribe?a=UFJYfF&g=SchTjq"
            target="_blank"
            rel="noreferrer"
          >
            Update Marketing Preferences.
          </Link>
        </Text>
      </Text>
    </Container>
  </ChakraProvider>

<Socialfooter />
</div>

  )
}
