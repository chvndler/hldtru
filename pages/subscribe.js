import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Background from '../public/background.jpg'
import styles from '../styles/Subscribe.module.css'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (

<div className={styles.div}>
			<Container fluid="sm">
			  <Row>
			    <Col>1 of 1

			<InputGroup hasValidation size="sm" className="mb-3">
	    <InputGroup.Text id="inputGroup-sizing-sm">Subscribe</InputGroup.Text>
	    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
	  </InputGroup>

			<br />
			<h1>SUBSCRIBE</h1>

			</Col>
	 </Row>
 </Container>

</div>

  )
}
