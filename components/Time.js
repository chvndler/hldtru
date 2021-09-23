import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment'
import { ChakraProvider, Text, Box, Center, Skeleton } from "@chakra-ui/react"

function Time() {
  const currentTime = moment().format('LTS')

  return(
<ChakraProvider>
  <Box mt="10px" position="fixed" top="0" right="0" left="0" zIndex="800">
    <Center>
      <Text fontSize="md">
        <Moment format="hh:mm:ss" interval={1000}></Moment>
      </Text>
    </Center>
  </Box>
</ChakraProvider>
  )
}

export default Time
