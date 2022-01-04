import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Background from '../public/background.jpg';
import ArchiveLogo from '../public/ArchiveLogo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import { Container, Box, HStack, Skeleton } from '@chakra-ui/react';

export default function Archive() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hldtru®</title>
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

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="https://cdn.hldtru.io/stylesheets/font.css" />
      </Head>
    </div>
  );
}
