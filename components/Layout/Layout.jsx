import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ ...props }) => {
  return (
    <Flex direction="column" align="center" m="0 auto" overflowX="hidden" {...props}>
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
};

export default Layout;
