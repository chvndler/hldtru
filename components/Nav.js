import React from 'react'
import Link from 'next/link'
import { ChakraProvider } from "@chakra-ui/react"
import { Box, Stack, Flex, Button, Spacer, Text, VStack, Center } from "@chakra-ui/react"
import styles from '../components/Essentials.module.css'


export default function Nav() {
  return (

 <ChakraProvider>
  <Flex>
    <Box p="2" h="45px" width="250px" bg="transparent">
      <Button
        size="sm"
        h="22px"
        pl="3"
        pr="3"
        mr="1"
        border="1px"
        variant="outline"
        borderRadius="md"
      >
        Back
      </Button>
      <Button
        size="sm"
        h="22px"
        pl="3"
        pr="3"
        mr="1"
        border="1px"
        variant="outline"
        borderRadius="md"
      >
        Shop
      </Button>
      <Button
        size="sm"
        h="22px"
        pl="3"
        pr="3"
        mr="1"
        border="1px"
        variant="outline"
        borderRadius="md"
      >
        Archive
      </Button>
    </Box>
    <Spacer />
    <Box p="2" h="45px" w="100px" align="right" bg="transparent">
      <Button
        size="sm"
        h="22px"
        pl="3"
        pr="3"
        mr="1"
        border="1px"
        variant="outline"
        borderRadius="md"
      >
        Cart
      </Button>
    </Box>
  </Flex>
 </ChakraProvider>


 )
}
