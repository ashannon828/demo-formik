import Head from "next/head";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

// https://chakra-ui.com/docs/form/form-control
// https://formik.org/docs/api/field

export default function Home() {
  return (
    <Box>
      <Head>
        <title>React forms with Formik and Yup</title>
      </Head>

      <Box as="main">
        <Center>
          <Box
            border="1px"
            borderColor="#CBD5E0"
            borderRadius="15px"
            p="1rem"
            mt="5rem"
            maxW="400px"
          >
            <Box>
              <Heading as="h1">
                Validating forms with React using Formik and Yup
              </Heading>
            </Box>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                confirmEmail: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Enter your first name"),
                lastName: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Enter your last name"),
                email: Yup.string()
                  .email("Enter a valid email")
                  .required("Enter your email"),
                confirmEmail: Yup.string()
                  .email("Enter a valid email")
                  .required("Please confirm your email"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <Form>
                  <FormControl
                    isInvalid={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  >
                    <FormLabel mt="2rem" htmlFor="firstName">
                      First Name*
                    </FormLabel>
                    <Input
                      id="firstName"
                      type="text"
                      {...formik.getFieldProps("firstName")}
                    />
                    <FormErrorMessage>
                      {formik.errors.firstName}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  >
                    <FormLabel mt="1rem" htmlFor="lastName">
                      Last Name*
                    </FormLabel>
                    <Input
                      id="lastName"
                      type="text"
                      {...formik.getFieldProps("lastName")}
                    />
                    <FormErrorMessage>
                      {formik.errors.lastName}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={formik.touched.email && formik.errors.email}
                  >
                    <FormLabel mt="1rem" htmlFor="email">
                      Email Address*
                    </FormLabel>
                    <Input
                      id="email"
                      type="email"
                      {...formik.getFieldProps("email")}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={
                      formik.touched.confirmEmail && formik.errors.confirmEmail
                    }
                  >
                    <FormLabel mt="1rem" htmlFor="confirmEmail">
                      Confirm Email
                    </FormLabel>
                    <Input
                      id="confirmEmail"
                      type="confirmEmail"
                      {...formik.getFieldProps("confirmEmail")}
                    />
                    <FormErrorMessage>
                      {formik.errors.confirmEmail}
                    </FormErrorMessage>
                  </FormControl>

                  <Center mt="1rem">
                    <Button type="submit">Submit</Button>
                  </Center>
                </Form>
              )}
            </Formik>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
