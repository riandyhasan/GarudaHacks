import React from "react";
import { FormControl, FormLabel, Switch, Flex, Box, Grid } from "@chakra-ui/react";
import Filterbox from "../Filterbox/Filterbox";
import Jobcard from "../JobCard/JobCard";
const SearchJob = ({ ...props }) => {
  return (
    <Flex {...props} paddingRight="1rem" paddingBottom="3rem">
      <Filterbox />
      <Grid templateColumns="repeat(2, 350px)" gridGap="2rem" marginLeft="2rem">
        <Jobcard />
        <Jobcard />
        <Jobcard />
        <Jobcard />
      </Grid>
    </Flex>
  );
};

export default SearchJob;
