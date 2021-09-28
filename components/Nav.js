import React from 'react'
import router from 'next/router'
import Link from 'next/link'
import { ChakraProvider } from "@chakra-ui/react"
import { Box, Stack, Flex, Button, Container, Spacer, Text, VStack, Center } from "@chakra-ui/react"
import styles from '../components/Essentials.module.css'


export default function Nav() {
  return (

<ChakraProvider>
  <Box w="100vw" position="fixed" top="0" right="0" bg="white" left="0">
    <Flex>
      <Box p="2" h="45px" width="300px" bg="transparent">
        <Button
          onClick={() => router.back()}
          size="sm"
          h="22px"
          pl="3"
          pr="3"
          mr="1"
          border="1px"
          variant="outline"
          borderRadius="xl"
        >
          Back
        </Button>
        <Link
          href="https://shop.hldtru.com/collections/all"
          target="_blank"
          rel="norefferer"
          passHref
        >
          <Button
            size="sm"
            h="22px"
            pl="3"
            pr="3"
            mr="1"
            border="0px"
            variant="outline"
            borderRadius="md"
          >
            Webstore
          </Button>
        </Link>
        <Link href="/front" passHref>
          <Button
            size="sm"
            h="22px"
            pl="3"
            pr="3"
            mr="1"
            border="0px"
            variant="outline"
            borderRadius="md"
          >
            Archive
          </Button>
        </Link>
      </Box>
      <Spacer />

      <Box p="2" h="45px" w="100px" align="right" bg="transparent">
        <Link
          href="https://shop.hldtru.com/cart"
          target="_blank"
          rel="norefferer"
          passHref
        >
          <Button
            size="sm"
            h="22px"
            pl="3"
            pr="3"
            mr="1"
            border="0px"
            variant="outline"
            borderRadius="md"
          >
            Cart
          </Button>
        </Link>
      </Box>
    </Flex>
  </Box>
</ChakraProvider>

 )
}
