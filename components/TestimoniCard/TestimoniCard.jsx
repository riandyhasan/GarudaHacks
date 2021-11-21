import React from "react";
import Image from "next/image";
import { Box, Text, Flex, Button, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const TestimoniCard = ({ nama, perusahaan, testi, rating, ...props }) => {
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Box mb="-1.5rem">
        <Image src="/assets/images/testi/1.png" width={141} height={141} />
      </Box>
      <Box display="flex" flexDir="column" alignItems="center" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)" borderRadius="30px" padding="2rem" {...props}>
        <Heading fontWeight="extrabold">{nama}</Heading>
        <Text fontWeight="light">{perusahaan}</Text>
        <Text textAlign="center" mt="2rem" fontWeight="light">
          {testi}
        </Text>
        <Box display="flex" mt="1rem" alignItems="center" gridGap="0.3rem">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < rating ? "#FDB868" : "#4A4744"} />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TestimoniCard;
