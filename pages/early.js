import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Early.module.css'


export default function Early() {
  return (

<>
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


<div className={styles.pre_footer}>
			<div className="input-group input-group-sm mb-3">
			  <div className="input-group-prepend">
			    <span className="input-group-text" id="inputGroup-sizing-sm">subscribe</span>
			  </div>
			  <input type="text" className="form-control" placeholder="Username" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
      </div>
</div>


  <div className={styles.footer}>
    <a href="">Contact</a>
    <a href="">Terms & Conditions</a>
    <a rel="noreferrer" href="https://instagram.com/hldtru" target="_blank">Instagram</a>
   </div>

</>
) }
