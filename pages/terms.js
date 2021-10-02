import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../components/Essentials.module.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialVimeo } from "react-icons/ti"
import { DiGithubBadge } from "react-icons/di"
import {
	ChakraProvider,
	Container,
	Box,
	Center,
	Text,
	Heading,
	Skeleton,
	Link,
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuOptionGroup,
	MenuItem,
	MenuDivider,
	Portal,
	Stack,
	Badge,
} from "@chakra-ui/react"
import Grid from '@react-css/grid'
import Nav from '../components/Nav'



export default function Terms() {
	const router = useRouter()

  return (

<div className={styles.canvas_fluid}>
  <Head>
    <title>Terms & Conditions.</title>
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
      href="https://cdn.hldtru.io/stylesheets/font.css"
    />
  </Head>

  <ChakraProvider>

    <Nav />

    <Skeleton height="140px" isLoaded />

    <Container maxW="container.md">
      <Heading as="h4" size="md">
        Legal
      </Heading>
      <Skeleton height="8px" isLoaded />
      <Text fontSize="sm">
        After you place an order you will receive a confirmation email that also
        acts as a reciept. This receipt does not comprise a contract, your order
        may be cancelled at anytime due to inability to authorize a payment,
        insufficient stock, fraud or suspicion or any other reason deemed
        appropriate by hldtru®.
      </Text>

      <Skeleton height="40px" isLoaded />

      <Heading as="h4" size="md">
        Payment Methods
      </Heading>
      <Skeleton height="8px" isLoaded />
      <Text fontSize="sm">
        All prices are in $USD. Our Webstore currently accept Visa, Mastercard,
        American Express, Discover, Apple Pay, and PayPal.
      </Text>

      <Skeleton height="40px" isLoaded />

      <Heading as="h4" size="md">
        Privacy Policy
      </Heading>
      <Skeleton height="10px" isLoaded />
      <Text fontSize="sm">
        Under no circumstances will your personal information be shared or sold
        to third parties. By using our webstore, you agree to provide hldtru®
        with your email, for future marketing & updates such as: New releases,
        Sales, and all information that our shipping partners may provide to you
        regarding your order(s) from hldtru®.
        <Skeleton height="10px" isLoaded />
        we respect your privacy, you have the option to opt-out at any time.
        <Skeleton height="10px" isLoaded />
        Manage (or){" "}
        <Link
          color="purple"
          href="https://manage.kmail-lists.com/subscriptions/unsubscribe?a=UFJYfF&g=SchTjq"
          target="_blank"
          rel="noreferrer"
        >
          Update Marketing Preferences.
        </Link>
        <Skeleton height="40px" isLoaded />
      </Text>

      <Heading as="h4" size="md">
        Preorder Policy
      </Heading>
      <Skeleton height="8px" isLoaded />
      <Text fontSize="sm">
      Preoder items are not available to ship at the time of purchase,
			the shipping timeline may vary. please allow 2 - 3 weeks for your order to be shipped.
			You will receive an email with order details and tracking information oce your item(s) has shipped.
			Contact sales@hldtru.com for more information regarding preorder items.
        <Skeleton height="40px" isLoaded />
      </Text>

      <Heading as="h4" size="md">
        Shipping and Taxes
      </Heading>
      <Skeleton height="8px" isLoaded />
      <Text fontSize="sm">
        Prices do not include shipping, taxes and duties. All products are provided a confirmation number. Orders are shipped from Charlotte, NC as soon as possible. Estimated delivery is to be used as a guide only, delays are not the responsibility of hldtru®.
      </Text>

      <Skeleton height="40px" isLoaded />

      <Heading as="h4" size="md">
        Returns and Exchanges
      </Heading>
      <Skeleton height="8px" isLoaded />
      <Text fontSize="sm">
        We do not offer exchanges or returns on any products. All sales are final.
      </Text>
			<Skeleton height="80px" isLoaded />
			<Text fontSize="xs">
			Copyright © 2021. All rights reserved.
			</Text>
			<Skeleton height="2px" isLoaded />
			<Text fontSize="xs">
			<strong>hldtru</strong>®
			</Text>
    </Container>

    <Skeleton height="80px" isLoaded />
    <Skeleton height="80px" isLoaded />

    <Box pos="fixed" zIndex={30} bottom="0" bg="white" w="100%" p={3}>
      <Stack direction="row">
          <AiOutlineInstagram />
            <TiSocialTwitter />
          <TiSocialVimeo />
          <DiGithubBadge />
      </Stack>
    </Box>
  </ChakraProvider>

  <footer className={styles.footer}>
    <Link href="/">
      <a>Contact</a>
    </Link>

    <Link href="/">
      <a>Terms & Conditions</a>
    </Link>

    <a href="https://instagram.com/hldtru" target="_blank" rel="noreferrer">
      Instagram
    </a>
  </footer>
</div>


  )
}
