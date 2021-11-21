import Head from "next/head";
import SignIn from "../components/SignIn/SignIn";
import { Flex } from "@chakra-ui/react";

export default function signin() {
  return (
    <Flex w="100%">
      <Head>
        <title>SemuaSama | Sign In</title>
      </Head>

      <main>
        <SignIn />
      </main>
    </Flex>
  );
}
