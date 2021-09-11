import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Early.module.css'

export default function Early() {
  return (

<div className={styles.container_fluid}>

      <Head>
       <title>Early Access</title>
			 <meta name="description" content="Web Application for hldtru®" />
			 <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
			 <link rel="icon" href="/favicon.ico" />
			 <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			 <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			 <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			 <link rel="manifest" href="/site.webmanifest" />
      </Head>

			<div className={styles.div1}>
	      <div className={styles.div2}>
	        <form className={styles.form} onSubmit="checkPswd(this , event)">
	          <p>ENTER PASSWORD TO SHOP.</p>
	          <input
	            className={styles.input_truth}
	            type="password"
	            id="pswd"
	            placeholder="Enter Password"
	          />
	          <input
						  className={styles.button}
	            type="button"
	            value="Submit"
	            id="tap"
	            onClick="checkPswd(this , event);"
	          />
	        </form>
	        <br />
	      </div>
	    </div>



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
) }
