import React from "react";
import { Flex, Text, Icon, Link, Menu, MenuButton, MenuList } from "@chakra-ui/react";

const NavItem = ({ icon, title, description, active, navSize }) => {
  return (
    <Flex mt={30} flexDir="column" w="100%" alignItems={navSize == "small" ? "center" : "flex-start"}>
      <Menu placement="right">
        <Link ml={navSize == "small" ? 0 : 4} w="100%" borderRadius="lg" backgroundColor={active ? "white" : ""} p={3} _hover={{ textDecor: "none", backgroundColor: "white", color: "#64A1F4" }} w={navSize == "large" && "100%"}>
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" color={active ? "#64A1F4" : "white"} />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"} color={active ? "#64A1F4" : "white"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default NavItem;
