import React from "react";
import Image from "next/image";
import { Flex, Text, Box, Heading, Badge, Button } from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { IoEllipsisVertical } from "react-icons/io5";

const JobCard = ({ nama, company, description, active, navSize }) => {
  return (
    <Box boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)" borderRadius="20px" p="2rem">
      <Flex justifyContent="space-between" s>
        <Flex alignItems="center" gridGap="2rem">
          <Image src="/assets/images/job/1.png" width={60} height={60} />
          <Box>
            <Heading fontSize="2xl">Shopee</Heading>
            <Text>Company</Text>
          </Box>
        </Flex>
        <IoEllipsisVertical size="1.6em" color="#5A38FD" />
      </Flex>
      <Box d="flex" flexDir="column" gridGap="1rem">
        <Box mt="1rem">
          <Heading fontSize="xl">UI/UX Designer</Heading>
          <Flex alignItems="center" gridGap="0.5rem">
            <MdLocationOn color="#3C7DD9" />
            <Text>Bandung</Text>
          </Flex>
        </Box>
        <Box>
          <Heading fontSize="lg">Job Description</Heading>
          <Text>Shopee is loking for UI/UX designer. In this team you will be responsible for developing Shopee’s UI/UX Web-based Application. The criteria for applicant are....... </Text>
        </Box>
        <Flex>
          <Badge p="0rem 0.8rem 0rem 0.8rem" bg="#C4C4C4" color="white">
            Full Time
          </Badge>
        </Flex>
      </Box>
      <Flex gridGap="2rem" mt="2rem">
        <Button bg="#3C7DD9" borderRadius="6px" color="white" _hover={{ color: "brand.200", bg: "white" }} fontWeight="extrabold">
          APPLY NOW
        </Button>
        <Button bg="#BFD6F6" borderRadius="6px" color="black" _hover={{ color: "brand.200", bg: "white" }} fontWeight="extrabold">
          VIEW JOB
        </Button>
      </Flex>
    </Box>
  );
};

export default JobCard;
