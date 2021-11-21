import React from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Checkbox, Flex } from "@chakra-ui/react";

const Filterbox = ({ ...props }) => {
  return (
    <Box padding="2rem" {...props}>
      <Checkbox defaultIsChecked colorScheme="gray" mb="2rem">
        Match with my profile
      </Checkbox>
      <Accordion w="25vw" defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" fontWeight="extrabold" fontSize="1.3em" textAlign="left">
                Job Type
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex alignItems="center" justifyContent="space-between">
              <Checkbox defaultIsChecked colorScheme="gray" mb="2rem">
                Full Time
              </Checkbox>
              <Box p="0.2rem" bg="#C4C4C4" color="white" borderRadius="5px">
                10
              </Box>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Filterbox;
