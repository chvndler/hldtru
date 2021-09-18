import React from 'react'
import Link from 'next/link'
import { AiOutlineInstagram } from 'react-icons/ai'
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialVimeo } from "react-icons/ti"
import { DiGithubBadge } from "react-icons/di"
import { ChakraProvider } from "@chakra-ui/react"
import { Box, Stack, Text, VStack, Center } from "@chakra-ui/react"
import styles from '../components/Essentials.module.css'


export default function Socialfooter() {
  return (
 <ChakraProvider>
	 <Box pos="fixed" zIndex={30} bottom="0" bg="white" w="100%" p={4}>
	 <Center>
		 <Stack direction="row">
			 <AiOutlineInstagram />
			 <TiSocialTwitter />
			 <TiSocialVimeo />
			 <DiGithubBadge />
		 </Stack>
	 </Center>
	 </Box>
 </ChakraProvider>
 )
}
