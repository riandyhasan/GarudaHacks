import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FormControl, Text, Button, Input, Flex, Heading, Box, Spacer } from "@chakra-ui/react";
const SignIn = () => {
  return (
    <Flex alignItems="flex-start" justifyContent="flex-end" minH="100vh" paddingLeft="4rem">
      <Box>
        <Heading fontWeight="extrabold" fontSize="6xl" my="5rem">
          Sign In
        </Heading>
        <Box d="flex" flexDir="column" gridGap="2rem">
          <FormControl w="40vw">
            <Heading fontWeight="extrabold" fontSize="3xl">
              Email
            </Heading>
            <Input type="email" mt="0.7rem" sborderRadius="40px" border="2px solid #64A1F4" placeHolder="Your email..." />
          </FormControl>
          <FormControl>
            <Heading fontWeight="extrabold" fontSize="3xl">
              Password
            </Heading>
            <Input type="password" mt="0.7rem" borderRadius="40px" border="2px solid #64A1F4" placeHolder="Your password..." />
          </FormControl>
        </Box>
        <Text color="brand.200" fontWeight="extrabold" cursor="pointer" mt="1rem">
          Forgot password?
        </Text>
        <Link href="/dashboard">
          <Button bg="brand.200" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)" borderRadius="30px" color="white" p="1.2rem" mt="2rem" _hover={{ color: "brand.200", bg: "white" }}>
            Sign In
          </Button>
        </Link>
      </Box>
      <Spacer />
      <Box bg="brand.100" minH="100vh" d="flex" alignItems="center">
        <Box ml="-4rem">
          <Image src="/assets/images/sign in.png" width={400} height={550} />
        </Box>
      </Box>
    </Flex>
  );
};

export default SignIn;
