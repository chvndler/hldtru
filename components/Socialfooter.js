import React from 'react';
import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialVimeo } from 'react-icons/ti';
import { DiGithubBadge } from 'react-icons/di';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Stack, Text, VStack, Center } from '@chakra-ui/react';
import styles from '../components/Essentials.module.css';

export default function Socialfooter() {
  return (
    <ChakraProvider>
      <Box pos="fixed" zIndex={30} bottom="0" bg="transparent" w="100%" p={4}>
        <Center>
          <Stack direction="row">
            <Link href="https://instagram.com/hldtru" target="_blank" rel="noreferrer" passHref>
              <AiOutlineInstagram />
            </Link>
            <Link href="https://twitter.com/hldtru" target="_blank" rel="noreferrer" passHref>
              <TiSocialTwitter />
            </Link>
            <Link href="https://vimeo.com/hldtru" target="_blank" rel="noreferrer" passHref>
              <TiSocialVimeo />
            </Link>
            <Link href="https://github.com/chvndler/hldtru" target="_blank" rel="noreferrer" passHref>
              <DiGithubBadge />
            </Link>
          </Stack>
        </Center>
      </Box>
    </ChakraProvider>
  );
}
