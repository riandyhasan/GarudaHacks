import React, { useState } from "react";
import Image from "next/image";
import { Flex, IconButton, Spacer, Box } from "@chakra-ui/react";
import { FiMenu, FiUser, FiSearch, FiChevronLeft } from "react-icons/fi";
import NavItem from "./NavItem";

const Sidebar = () => {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex pos="sticky" left="0" bg="brand.300" w={navSize == "small" ? "75px" : "200px"} justifyContent="flex-start" flexDir="column" color="white">
      <Flex flexDir="column" w="100%" alignItems={navSize == "small" ? "center" : "flex-start"} as="nav" gridGap="4.5rem">
        <Flex alignItems="center" justifyCenter="center">
          <IconButton
            background="none"
            mt={5}
            _hover={{ background: "none" }}
            icon={navSize == "small" ? <FiMenu size="2em" /> : <FiChevronLeft size="2em" />}
            onClick={() => {
              if (navSize == "small") changeNavSize("large");
              else changeNavSize("small");
            }}
          />
          <Box display={navSize == "small" ? "none" : "block"} mb={navSize == "small" ? 0 : -7} ml={navSize == "small" ? 0 : 5}>
            <Image src="/assets/images/logo.png" width={100} height={40} />
          </Box>
        </Flex>
        <Spacer />
        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <NavItem navSize={navSize} icon={FiUser} title="Profile" />
          <NavItem navSize={navSize} icon={FiSearch} title="Find Job" active />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
