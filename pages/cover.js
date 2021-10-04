import Head from "next/head"
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Stage, Environment } from '@react-three/drei'
import Sidenav from '../components/Sidenav'
import styles from '../styles/Model.module.css'
import Model from '../components/Model'

export default function Cover() {
  const ref = useRef()
  return (

<div className={styles.canvas}>
  <Head>
    <title>Cover.</title>
    <meta charset="UTF-8" />
    <meta name="description" content="East Coast based design label." />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <meta property="og:title" content="hldtru®" />
    <meta property="og:url" content="https://www.hldtru.com/" />
    <meta property="og:image" content="https://cdn.hldtru.space/assets/social.jpg" />
    <meta property="og:image:secure_url" content="https://cdn.hldtru.io/assets/social.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1600" />
    <meta property="og:image:height" content="900" />
    <meta property="og:image:alt" content="Logo and site address" />
    <meta name="mobile-web-app-capable" content="yes" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="stylesheet" href="https://cdn.hldtru.io/stylesheets/font.css" />
  </Head>

  <Sidenav />

  <Canvas shadows dpr={[1, 2]} camera={{ position: [1, 2, 2] }}>
    <Suspense fallback={null}>
			<Environment background={true} files={'/sunrise_1k.hdr'} />
      <Stage
        controls={ref}
        preset="rembrandt"
        intensity={1}
        contactShadow={false}
        environment="forest"
      >
        <Model />
      </Stage>
    </Suspense>
    <OrbitControls ref={ref} />
  </Canvas>
</div>

  )
}
