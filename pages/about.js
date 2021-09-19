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


export default function About() {
  return (

<div className={styles.canvas_fluid}>
  <Head>
    <title>About.</title>
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
      <Box p="2" h="45px" width="250px" bg="transparent">
        <Button
          size="sm"
          h="22px"
          pl="3"
          pr="3"
          mr="1"
          border="1px"
          variant="outline"
          borderRadius="md"
        >
          Back
        </Button>
        <Button
          size="sm"
          h="22px"
          pl="3"
          pr="3"
          mr="1"
          border="1px"
          variant="outline"
          borderRadius="md"
        >
          Shop
        </Button>
        <Button
          size="sm"
          h="22px"
          pl="3"
          pr="3"
          mr="1"
          border="1px"
          variant="outline"
          borderRadius="md"
        >
          Archive
        </Button>
      </Box>
      <Spacer />
      <Box p="2" h="45px" w="100px" align="right" bg="transparent">
        <Button
          size="sm"
          h="22px"
          pl="3"
          pr="3"
          mr="1"
          border="1px"
          variant="outline"
          borderRadius="md"
        >
          Cart
        </Button>
      </Box>
    </Flex>

    <Container pt="200" maxW="container.md">
      <Heading as="h4" size="lg">
        About the brand.
      </Heading>
      <Skeleton height="8px" isLoaded />
      <Text fontSize="sm">
        <i>
          <strong>hldtru®</strong>
        </i>{" "}
        _ is an East Coast based design label. Our only mission is to push truth
        in everything. The only desire is to be fully in our truth, creating
        true happiness.
        <Skeleton height="12px" isLoaded />
        <Skeleton height="12px" isLoaded />
      </Text>
    </Container>
  </ChakraProvider>

  <Socialfooter />
</div>

 )
}
