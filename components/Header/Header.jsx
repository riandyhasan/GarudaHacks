import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Stack, Button } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Our Partners",
    path: "#partners",
  },
  {
    name: "About Us",
    path: "#aboutus",
  },
  {
    name: "Company Login",
    path: "/",
  },
];
const Header = ({ ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" p="0.75em" paddingLeft={"3em"} paddingRight={["2em", "4em", "6em"]} {...props}>
      <Box cursor="pointer" maxW="25vw">
        <Link href="/">
          <Image src="/assets/images/logo.png" height={60} width={130} />
        </Link>
      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
      </Box>
      <Box display={{ base: menuOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Stack mt={{ base: menuOpen ? "1em" : "0", md: "0" }} spacing={50} align="center" justify={["center", "space-between", "flex-end", "flex-end"]} direction={["column", "row", "row", "row"]}>
          {LINKS.map((link) => (
            <Box key={link.name + "-nav"}>
              <Link href={link.path} key={link.name + "-nav"}>
                <Text
                  fontSize="1.3em"
                  fontWeight="light"
                  cursor="pointer"
                  textAlign="center"
                  color="black"
                  _hover={{
                    color: "brand.100",
                  }}
                >
                  {link.name}
                </Text>
              </Link>
            </Box>
          ))}
          <Link href="/signin">
            <Button bg="brand.200" fontSize="1.1em" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)" borderRadius="30px" color="white" _hover={{ color: "brand.200", bg: "white" }} padding="1.2rem">
              Sign In
            </Button>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
