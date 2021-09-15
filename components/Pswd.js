import React from 'react';
import { Formik } from 'formik';
import { Form, Field, FormErrorMessage, FormControl, FormLabel, Input } from 'formik';
import { Button } from 'formik'




function FormikExample() {
  function validatePassword(value) {
    let error
    if (!value) {
      error = "Password is required"
    } else if (value.toLowerCase() !== "truth") {
      error = "Jeez! You're not a fan"
    }
    return error
  }

  return (
    <Formik
      initialValues={{ password: "Enter Password" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name="password" validate={validatePassword}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="password">Enter Password</FormLabel>
                <Input {...field} id="password" placeholder="Password" />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default Formik
