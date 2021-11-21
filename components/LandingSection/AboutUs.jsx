import React from "react";
import Image from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Flex id="aboutus" justifyContent="flex-start" alignItems="flex-start" padding="1rem 4rem 4rem 0rem" gridGap="8rem">
      <Image src="/assets/images/about us.png" width={750} height={550} />
      <Box>
        <Heading fontWeight="extrabold" fontSize="6xl" maxW="30vw">
          We are here to help you !
        </Heading>
        <Box fontWeight="extrabold" mt="4rem" ml="-5rem">
          <span style={{ backgroundColor: "#BFD6F6", borderRadius: "40px", padding: "0.3rem 3.5rem 0.3rem 3.5rem", fontSize: "1.5rem", textAlign: "center" }}>Find a job</span>
        </Box>
        <Box fontWeight="extrabold" mt="5rem">
          <span style={{ backgroundColor: "#8DBDFF", borderRadius: "40px", padding: "0.3rem 3.5rem 0.3rem 3.5rem", fontSize: "1.5rem", textAlign: "center" }}>Broaden your network</span>
        </Box>
        <Box fontWeight="extrabold" mt="5rem" ml="-5rem">
          <span style={{ backgroundColor: "#BFD6F6", borderRadius: "40px", padding: "0.3rem 3.5rem 0.3rem 3.5rem", fontSize: "1.5rem", textAlign: "center" }}>Create equality</span>
        </Box>
      </Box>
    </Flex>
  );
};

export default AboutUs;
