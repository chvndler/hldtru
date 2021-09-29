import Head from 'next/head'
import Link from 'next/link'
import { Image } from "@chakra-ui/react"
import styles from '../components/Essentials.module.css'
import Container from 'rsuite/Container'
import { Nav, NavItem, Content, Grid, Row, Col } from 'rsuite'
import 'rsuite/styles/index.less';

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


	<Nav>
    <Nav.Item>Home</Nav.Item>
    <Nav.Item>Collections</Nav.Item>
    <Nav.Item>Webstore</Nav.Item>
    <Nav.Item>Products</Nav.Item>
    <Nav.Item>About</Nav.Item>
  </Nav>

  <Container className={styles.r_container}>
    <Content>
      <Grid fluid>
        <Row gutter={10} className={styles.row}>
          <Col xs={24} sm={12} md={8}>
            <div className={styles.col_xl}>
						<Image
						 src="https://cdn.hldtru.space/assets/ShortsPacks17.jpg"
						 borderRadius="12px"
						 height="400px"
						 width="100%"
						 alt="pack"
						 layout="fill"
						 objectFit="cover"
						 quality={100}
						 placeholder="blur"
						 blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+zHgAFeAJ5UEZb3wAAAABJRU5ErkJggg=="
						 />
						 </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className={styles.col_lg}>
						<Image
						 src="https://cdn.hldtru.space/assets/land.jpg"
						 borderRadius="12px"
						 height="400px"
						 width="100%"
						 alt="pack"
						 layout="fill"
						 objectFit="cover"
						 quality={100}
						 placeholder="blur"
						 blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+zHgAFeAJ5UEZb3wAAAABJRU5ErkJggg=="
						 />
						 </div>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <div className={styles.col_xl}>
						<Image
						 src="https://cdn.hldtru.space/assets/tiffany_hd.jpg"
						 borderRadius="12px"
						 height="400px"
						 width="100%"
						 alt="pack"
						 layout="fill"
						 objectFit="cover"
						 quality={100}
						 placeholder="blur"
						 blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+zHgAFeAJ5UEZb3wAAAABJRU5ErkJggg=="
						 />
						 </div>
          </Col>
        </Row>

        <Row gutter={10} className={styles.row}>
          <Col xs={24} sm={24} md={8} lg={6}>
            <div className={styles.col_lg}></div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={12}>
            <div className={styles.col_lg}></div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
          <div className={styles.col_lg}></div>
          </Col>
        </Row>

				<Row gutter={10} className={styles.row}>
					<Col xs={24} sm={12} md={8}>
						<div className={styles.col_lg}></div>
					</Col>
					<Col xs={24} sm={12} md={8}>
						<div className={styles.col_lg}></div>
					</Col>
					<Col xs={24} sm={24} md={8}>
					<div className={styles.col_lg}></div>
					</Col>
				</Row>
      </Grid>
    </Content>
  </Container>
</div>



  )
}
