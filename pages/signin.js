import Head from "next/head";
import SignIn from "../components/SignIn/SignIn";
import { Flex } from "@chakra-ui/react";

export default function signin() {
  return (
    <>
      <Head>
        <title>SemuaSama | Sign In</title>
      </Head>

      <main>
        <SignIn />
      </main>
    </>
  );
}
