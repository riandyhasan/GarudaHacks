import React from "react";
import Link from "next/link";
import { Box, Text, Flex, Spacer, Grid } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FaLine } from "react-icons/fa";
const Footer = ({ ...props }) => {
  return (
    <Box
      as="footer"
      bg="brand.200"
      minW="100vw"
      p="1.5rem"
      color="white"
      display="grid"
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(3, 1fr)",
      }}
      gridTemplateRows={{
        base: "0px repeat(2, 1fr)",
        md: "1fr",
      }}
      gridGap={{
        base: "0.5em",
        md: "0",
      }}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Spacer />
      <Text textAlign="center">&copy; 2021 Copyright SemuaSama.</Text>
      <Grid
        cursor="pointer"
        gridTemplateColumns="repeat(3, 2rem)"
        gridGap="0.5rem"
        justifyContent="center"
        alignItems="center"
        justifySelf={{
          base: "center",
          md: "flex-end",
        }}
      >
        <Link href="https://instagram.com/">
          <AiOutlineInstagram size="1.5em" />
        </Link>
        <Link href="https://www.linkedin.com/">
          <AiOutlineLinkedin size="1.5em" />
        </Link>
        <Link href="">
          <FaLine size="1.5em" />
        </Link>
      </Grid>
    </Box>
  );
};

export default Footer;
