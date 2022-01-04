import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { BiRightArrowAlt } from 'react-icons/bi';
import styles from '../components/Essentials.module.css';
import {
  ChakraProvider,
  Button,
  Input,
  InputRightElement,
  InputGroup,
  Badge,
  WrapItem,
  Skeleton,
} from '@chakra-ui/react';

function Access() {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const onSubmit = async values => {
    await sleep(300);

    if (values.password !== 'TIFFANY') {
      return { [FORM_ERROR]: 'Password is incorrect. Try again.' };
    }
    window.open('https://shop.hldtru.com/collections/early-truth', '_blank');
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.password) {
          errors.password = 'Early Access Password is Required.';
        }
        return errors;
      }}
      render={({ submitError, handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Field name="password">
            {({ input, meta }) => (
              <InputGroup size="sm">
                <Input
                  {...input}
                  variant="outline"
                  focusBorderColor="lime"
                  borderRadius="lg"
                  borderColor="gray.300"
                  pr=".5rem"
                  type="password"
                  placeholder=" Enter password"
                  isRequired
                />
                <InputRightElement width="5.7rem" pl=".2rem" pr="0.2rem">
                  <Button
                    rightIcon={<BiRightArrowAlt />}
                    bg="gray.900"
                    color="white"
                    h="1.6rem"
                    pr=".5rem"
                    size="sm"
                    type="submit"
                    disabled={submitting}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </InputRightElement>
                {meta.error && meta.touched && (
                  <span className={styles.alert}>
                    <Badge mt="30px" zIndex="1000">
                      {meta.error}
                    </Badge>
                  </span>
                )}
              </InputGroup>
            )}
          </Field>
          {submitError && (
            <span className={styles.error}>
              <Badge variant="outline" colorScheme="blue" mt="30px" zIndex="1002" pl="10px" pr="10px">
                {submitError}
              </Badge>
            </span>
          )}
          <pre className={styles.pre}>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
}

export default Access;
