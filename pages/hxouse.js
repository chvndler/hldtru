import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HxouseLogo from '../public/hxouse.svg'
import styles from '../components/Essentials.module.css'
import Grid from '@react-css/grid'


export default function Hxouse() {
  return (

    <div className={styles.container}>
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




						<Grid>
						  <Grid.Item area='header'>
								<Link href="/">
								<a className={styles.svg}>
			     	<Image src={HxouseLogo} alt="hxouse.logo" srcSet="0.5x" />
								</a>
								</Link>
						  </Grid.Item>
						</Grid>


						<Grid className={styles.grid_gap} gap='2em'>
						</Grid>

						<Grid>
						  <Grid.Item columnStart={2} columnEnd={5}>
						    <h3>Structured Page</h3>
										<p>
												<small>
														After you place an order you will receive a confirmation email that also
														acts as a reciept. This receipt does not comprise a contract, your order
														may be cancelled at anytime due to inability to authorize a payment,
														insufficient stock, fraud or suspicion or any other reason deemed
														appropriate by hldtru®.
												</small>
										</p>
						  </Grid.Item>
						</Grid>


      <footer className={styles.footer}>
      <Link href="/">
      <a>Contact</a>
      </Link>

      <Link href="/">
      <a>Terms & Conditions</a>
      </Link>

      <a href="https://instagram.com/hldtru" target="_blank" rel="noreferrer">Instagram</a>
      </footer>
    </div>
  )
}
