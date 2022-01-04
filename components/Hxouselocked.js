import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
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

function Hxouseword() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const onSubmit = async values => {
    await sleep(300);

    if (values.password !== 'hxouse') {
      return { [FORM_ERROR]: 'Password is incorrect.' };
    }
    window.open('https://www.hldtru.us/collections/early-truth', '_blank');
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.password) {
          errors.password = 'Password is Required.';
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
                  focusBorderColor="lime"
                  borderRadius="lg"
                  pr=".5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  isRequired
                />
                <InputRightElement width="3.5rem" pr=".25rem">
                  <Button h="1.5rem" w="3.5rem" size="xs" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
                {meta.error && meta.touched && (
                  <span className={styles.alert}>
                    <Badge variant="subtle" colorScheme="gray" m="auto" zIndex="1000">
                      {meta.error}
                    </Badge>
                  </span>
                )}
              </InputGroup>
            )}
          </Field>
          {submitError && (
            <span className={styles.error}>
              <Badge variant="subtle" colorScheme="gray" m="auto" zIndex="1002" pl="10px" pr="10px">
                {submitError}
              </Badge>
            </span>
          )}

          <Button
            size="xs"
            height="28px"
            width="100%"
            mt={1}
            border="0px"
            borderColor="gray"
            type="submit"
            disabled={submitting}
            onClick={handleSubmit}
          >
            Enter
          </Button>
          <pre className={styles.pre}>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
}

export default Hxouseword;
