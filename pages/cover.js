import Head from "next/head"
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, Environment } from '@react-three/drei'
import styles from '../styles/Model.module.css'
import Model from '../components/Model'

export default function Cover() {
  const ref = useRef()
  return (

<div className={styles.canvas}>
  <Head>
    <title>Cover.</title>
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
