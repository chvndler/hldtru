import styles from '../components/Essentials.module.css'
import React from 'react'
import { useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import {
	InputGroup,
	Code,
	Heading,
	Text,
	Input,
	InputRightElement,
	Button,
	Container,
	Stack,
	Center,
	Square,
	Circle,
} from "@chakra-ui/react"


function PasswordInput() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="sm">
      <Input
	  		focusBorderColor="lime"
		  	borderRadius="lg"
        pr=".5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement width="3.5rem">
        <Button
				  h="1.5rem"
					w="3rem"
					size="xs"
					onClick={handleClick}>
            {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
