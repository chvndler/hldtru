import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { ChakraProvider, Container, Box, Stack, Skeleton } from '@chakra-ui/react';

export default function Sidenav() {
  return (
    <div className={styles.sidenav}>
      <a href="https://shop.hldtru.com/collections/new">New</a>
      <a href="https://shop.hldtru.com/collections/shorts">Shorts</a>
      <a href="https://shop.hldtru.com/collections/tees">Tees</a>
      <a href="https://shop.hldtru.com/collections/all">Shop All</a>
      <Link href="/hxouse">
        <a>HXOUSE</a>
      </Link>

      <Link href="/front">
        <a>Archive®</a>
      </Link>

      <Skeleton height="18px" isLoaded />

      <Link href="/early">
        <a>
          <h5>Early Access.</h5>
        </a>
      </Link>

      <Link href="/about">
        <a>
          <h5>Information.</h5>
        </a>
      </Link>

      <Link href="/subscribe">
        <a>
          <h5>Subscribe.</h5>
        </a>
      </Link>
    </div>
  );
}
