import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../components/Essentials.module.css'
import Grid from '@react-css/grid'

export default function Privacy() {
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


				<Grid className={styles.grid_gap} gap='2em'>
				</Grid>


				<Grid>
						<Grid.Item columnStart={2} columnEnd={5}>
	     <p className="h4">Legal</p>
	     <p>
	       <small>
	         After you place an order you will receive a confirmation email that also
	         acts as a reciept. This receipt does not comprise a contract, your order
	         may be cancelled at anytime due to inability to authorize a payment,
	         insufficient stock, fraud or suspicion or any other reason deemed
	         appropriate by hldtru®.
	       </small>
	     </p>

	     <br />

	     <p className="h4">Payment Methods</p>
	     <p>
	       <small>
	         All prices are in $USD. Our Webstore currently accept Visa, Mastercard,
	         American Express, Discover, Apple Pay, and PayPal.
	       </small>
	     </p>

	     <br />

	     <p className="h4">Privacy Policy</p>
	     <p>
	       <small>
	         Under no circumstances will your personal information be shared or sold
	         to third parties. By using our webstore, you agree to provide hldtru®
	         with your email, for future marketing & updates such as: New releases,
	         Sales, and all information that our shipping partners may provide to you
	         regarding your order(s) from hldtru®.
	         <br />
	         <br />
	         As always, We respect your privacy. You have the option to opt-out at
	         any time.
	         <br />
	         <br />( Manage Marketing Preferences )
	       </small>
	     </p>

	     <br />

	     <p className="h4">Preorder Policy</p>
	     <p>
	       <small>
	         Under no circumstances will your personal information be shared or sold
	         to third parties. By using our webstore, you agree to provide hldtru®
	         with your email, for future marketing & updates such as: New releases,
	         Sales, and all information that our shipping partners may provide to you
	         regarding your order(s) from hldtru®.
	       </small>
	     </p>

	     <br />

	     <p className="h4">Shipping & Taxes</p>
	     <p>
	       <small>
	         Under no circumstances will your personal information be shared or sold
	         to third parties. By using our webstore, you agree to provide hldtru®
	         with your email, for future marketing & updates such as: New releases,
	         Sales, and all information that our shipping partners may provide to you
	         regarding your order(s) from hldtru®.
	       </small>
	     </p>

	     <br />

	     <p className="h4">Returns and Exchanges</p>
	     <p>
	       <small>
	         Under no circumstances will your personal information be shared or sold
	         to third parties. By using our webstore, you agree to provide hldtru®
	         with your email, for future marketing & updates such as: New releases,
	         Sales, and all information that our shipping partners may provide to you
	         regarding your order(s) from hldtru®.
	       </small>
	     </p>
						</Grid.Item>
	   </Grid>

				<Grid className={styles.grid_gap} gap='2em'>
				</Grid>

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
