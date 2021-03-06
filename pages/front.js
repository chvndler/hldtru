import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/Essentials.module.css';
import Socialfooter from '../components/Socialfooter';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import Time from '../components/Time';
import {
  InputGroup,
  Code,
  Heading,
  Box,
  Grid,
  Flex,
  Spacer,
  GridItem,
  Stack,
  Text,
  Skeleton,
  Input,
  InputRightElement,
  Button,
  Container,
  VStack,
  Center,
  Square,
  Circle,
} from '@chakra-ui/react';

export default function Front() {
  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  });

  const theme = extendTheme({ breakpoints });
  return (
    <div className={styles.canvas_fluid}>
      <Head>
        <title>Archive.</title>
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

      <ChakraProvider>
        <Time />
        <Container h="50vh" maxW="60%">
          <Center h="30%">
            <Heading fontSize="2xl">HOLDTRUE®</Heading>
            <Text fontSize="2xl">
              <i>A</i>rchive.
            </Text>
          </Center>
        </Container>
        <Text fontSize="xl" align="center" mb="10px">
          Archive is currently being updated.
          <br />
          Please check back soon.
        </Text>
        <Container maxW="70%" className={styles.midmenu} centerContent overflow="auto" whiteSpace="nowrap">
          <Box width={{ base: '100%', sm: '100%', md: '100%' }} bg="transparent" p={2} color="white">
            <Grid templateColumns="repeat(7, 1fr)" gap={2}>
              <Box
                as="button"
                w="100%"
                borderRadius="8"
                p="2"
                h="8"
                borderWidth="1px"
                borderColor="black"
                bg="transparent"
                color="black"
              >
                <Link href="/" passHref>
                  <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                    <a>DAYS OF TRUTH©</a>
                  </Text>
                </Link>
              </Box>

              <Box
                as="button"
                w="auto"
                borderRadius="8"
                p="2"
                h="8"
                borderWidth="1px"
                borderColor="black"
                bg="transparent"
                color="black"
              >
                <Link href="/" passHref>
                  <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                    <a>COPENHAGEN® RACING SERIES</a>
                  </Text>
                </Link>
              </Box>

              <Box
                as="button"
                w="auto"
                borderRadius="8"
                p="2"
                h="8"
                borderWidth="1px"
                borderColor="black"
                bg="transparent"
                color="black"
              >
                <Link href="/" passHref>
                  <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                    <a>V2: "ALONE W/ THE GODS"</a>
                  </Text>
                </Link>
              </Box>

              <Box
                as="button"
                w="auto"
                borderRadius="8"
                p="2"
                h="8"
                borderWidth="1px"
                borderColor="black"
                bg="transparent"
                color="black"
              >
                <Link href="/" passHref>
                  <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                    <a>TRUTH BE TOLD</a>
                  </Text>
                </Link>
              </Box>

              <Box
                as="button"
                w="100%"
                borderRadius="8"
                p="2"
                h="8"
                borderWidth="1px"
                borderColor="black"
                bg="transparent"
                color="black"
              >
                <Link href="/" passHref>
                  <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                    <a>POWERED BY TRUTH</a>
                  </Text>
                </Link>
              </Box>

              <Box
                as="button"
                w="100%"
                borderRadius="8"
                p="2"
                h="8"
                borderWidth="1px"
                borderColor="black"
                bg="transparent"
                color="black"
              >
                <Link href="/" passHref>
                  <Text fontSize="xs" m="auto" p="0" fontWeight="bold">
                    <a>TRUTH BE TOLD</a>
                  </Text>
                </Link>
              </Box>

              <Box
                as="button"
                w="100%"
                borderRadius="8"
                p="2"
                h="8"
                borderWidth="1px"
                mr="2px"
                borderColor="black"
                bg="transparent"
                color="black"
              >
                <Link href="/" passHref>
                  <Text fontSize="xs" m="0" p="0" fontWeight="bold">
                    <a>PRESEASON</a>
                  </Text>
                </Link>
              </Box>
            </Grid>
          </Box>
        </Container>

        <Socialfooter />
      </ChakraProvider>
    </div>
  );
}
