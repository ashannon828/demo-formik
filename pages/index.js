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
              <Heading as="h1">React forms with Formik and Yup</Heading>
              <Text>
                Simple demo of forms with react using Formik and Yup validation.
              </Text>
            </Box>
            <Formik
              initialValues={{ firstName: "", lastName: "", email: "" }}
              validationSchema={Yup.object({
                firstName: Yup.string()

                  .max(15, "Must be 15 characters or less")

                  .required("Required"),

                lastName: Yup.string()

                  .max(20, "Must be 20 characters or less")

                  .required("Required"),

                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
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
                  <FormLabel htmlFor="firstName">First Name</FormLabel>

                  <Input
                    id="firstName"
                    type="text"
                    {...formik.getFieldProps("firstName")}
                  />

                  {formik.touched.firstName && formik.errors.firstName ? (
                    <FormErrorMessage>
                      {formik.errors.firstName}
                    </FormErrorMessage>
                  ) : null}

                  <FormLabel htmlFor="lastName">Last Name</FormLabel>

                  <Input
                    id="lastName"
                    type="text"
                    {...formik.getFieldProps("lastName")}
                  />

                  {formik.touched.lastName && formik.errors.lastName ? (
                    <FormErrorMessage>
                      {formik.errors.lastName}
                    </FormErrorMessage>
                  ) : null}

                  <FormLabel htmlFor="email">Email Address</FormLabel>

                  <Input
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />

                  {formik.touched.email && formik.errors.email ? (
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  ) : null}

                  <Button type="submit">Submit</Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
