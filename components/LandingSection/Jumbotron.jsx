import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text, Flex, Button, Heading } from "@chakra-ui/react";

const Jumbotron = () => {
  return (
    <Flex justifyContent="flex-end" alignItems="center" padding="1rem 0rem 4rem 4rem" gridGap="8rem">
      <Box>
        <Heading fontWeight="extrabold" fontSize="6xl" maxW="30vw">
          Destroy <br />
          The Barrier
          <br />
          <Heading fontWeight="extrabold" fontSize="4xl">
            Creating Equality.
          </Heading>
        </Heading>
        <Text mt="2rem" alignText="justify" maxW="30vw">
          SemuaSama is particularly inspired from an energetic and positive disabled individual that i met on jalan maliboro a while a go. He explained that he currently has no job due to the reason that he didn’t have a proper
          accessibility towards a place or company that would accept him.{" "}
        </Text>
        <Link href="#aboutus">
          <Button bg="brand.200" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)" borderRadius="30px" color="white" _hover={{ color: "brand.200", bg: "white" }} mt="4rem">
            Learn More
          </Button>
        </Link>
      </Box>
      <Image src="/assets/images/landing.png" width={750} height={550} />
    </Flex>
  );
};

export default Jumbotron;
