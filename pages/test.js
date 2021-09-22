import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/Essentials.module.css'
import { ThemeProvider } from 'theme-ui'
import {
	Grid,
	Box,
} from 'theme-ui'

import Time from '../components/Time'


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

<ThemeProvider>
		<Grid mt="100px" gap={2} columns={[2, '1fr 2fr']}>
     <Box bg="primary">Box</Box>
     <Box bg="muted">Box</Box>
     <Box bg="primary">Box</Box>
     <Box bg="muted">Box</Box>
    </Grid>
</ThemeProvider>
</div>

  )
}
