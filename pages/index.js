import Head from "next/head";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useFormik } from "formik";

export default function Home() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box>
      <Head>
        <title>React forms with Formik and Yup</title>
      </Head>

      <Box as="main">
        <Box>
          <Heading as="h1">React forms with Formik and Yup</Heading>
          <Text>
            Simple demo of forms with react using Formik and Yup validation.
          </Text>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <button type="submit">Submit</button>
        </form>
      </Box>
    </Box>
  );
}
