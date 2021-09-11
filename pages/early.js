import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Early.module.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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






  <div className={styles.footer}>
    <a href="">Contact</a>
    <a href="">Terms & Conditions</a>
    <a rel="noreferrer" href="https://instagram.com/hldtru" target="_blank">Instagram</a>
   </div>

</>
) }
