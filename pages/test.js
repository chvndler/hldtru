import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/Essentials.module.css'
import { ChakraProvider } from "@chakra-ui/react"
import {
	InputGroup,
	Code,
	Heading,
	Text,
	Input,
	InputRightElement,
	Button,
	Container,
	Stack,
	Center,
	Square,
	Circle,
} from "@chakra-ui/react"
import Time from '../components/Time'

import PasswordInput from '../components/Password'


export default function Test() {
	return (

<div className={styles.canvas_fluid}>
			  <Head>
			    <title>hldtru®</title>
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

		<Time />

</div>

  )
}
