import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/Essentials.module.css'
import { ChakraProvider, Container, Heading, Text } from "@chakra-ui/react"
import FormikExample from '../components/Pswd'



export default function Formik() {
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

          <ChakraProvider>
						<Container maxW="xl" centerContent>
							<Heading as="h2" size="xl">
								Early Access.
							</Heading>
							<br />

						 <FormikExample />

							<br />
							<br />
							<Text fontSize="sm">
								<i>
									power in <strong>truth</strong>
								</i>
								®
							</Text>
						</Container>
        </ChakraProvider>
</div>

)
}
