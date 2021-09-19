import React from 'react'
import { render } from 'react-dom'
import { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import styles from '../components/Essentials.module.css'
import { ChakraProvider,
  Button,
  Input,
  InputRightElement,
  InputGroup,
  Badge,
  WrapItem,
  Skeleton,
 } from '@chakra-ui/react'



function Access() {

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    const onSubmit = async values => {
          await sleep(300)

          if (values.password !== 'early') {
              return { [FORM_ERROR]: 'Password is incorrect.' }
          }
    window.open("https://www.hldtru.us", "_blank");
  }

 return (
    <Form
      onSubmit={onSubmit}
      validate={values => {

        const errors = {}
        if (!values.password) {
          errors.password = 'Early Access Password is Required.'
        }
        return errors
      }
    }

render={({
        submitError,
        handleSubmit,
        form,
        submitting,
        pristine,
        values
      }) => (

        <form onSubmit={handleSubmit} className={styles.form}>
          <Field name="password">
            {({ input, meta }) => (
            <InputGroup size="sm">
              <Input {...input}
							    variant="flushed"
									focusBorderColor="lime"
                  pr=".5rem"
                  type="password"
                  placeholder=" Enter password"
                  isRequired
              />
        <InputRightElement width="4.5rem" pr=".2rem">
             <Button
               h="1.57rem"
               w="4.2rem"
               size="sm"
							 type="submit"
							 variant="pink"
							 disabled={submitting}
               onClick={handleSubmit}>

							 Submit

             </Button>
       </InputRightElement>
  {meta.error && meta.touched &&

    <span className={styles.alert}>

  <Badge
    m="auto"
    zIndex="1000"
    >{meta.error}</Badge></span>}

        </InputGroup>
            )}
          </Field>
          {submitError && <span className={styles.error}>

          <Badge
              variant="outline"
              colorScheme="gray"
              m="auto"
              zIndex="1002"
              pl="10px"
              pr="10px">
          {submitError}</Badge></span>}
          <pre className={styles.pre}>{JSON.stringify(values, 0, 2)}</pre>
      </form>



    )
  }
 />


 )
}

export default Access