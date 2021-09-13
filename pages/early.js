import Head from 'next/head'
import Link from 'next/link'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Grid from '@react-css/grid'
import Button from 'react-bootstrap/Button';
import styles from '../components/Essentials.module.css'

	export default function Early() {
	  return (

	  <div className={styles.container_form}>
			<div className={styles.center}>
			 <p className="h5">Enter password to shop.</p>
			 <Grid className={styles.grid_gap_sm} gap='2em'></Grid>
				<InputGroup size="sm" className="mb-3">
			    <FormControl
			      placeholder="Enter Password"
			      aria-label="Password"
			      aria-describedby="basic-addon2"
			    />

				<a href="https://hldtru.us/collections/earlytruth" target="_blank" rel="noreferrer">
				<Button variant="dark" id="button-addon2">
			      Submit
			    </Button>
					</a>

			  </InputGroup>
			</div>
	 </div>
	  )
	}
