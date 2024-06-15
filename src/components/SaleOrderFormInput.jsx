import { Input, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SaleOrderFormInput = ({ type, placeholder, text }) => {
  return (
    <VStack>
      <Text fontSize="xl" fontWeight="600">
        {text}
      </Text>
      <Input type={type} placeholder={placeholder} />
    </VStack>
  );
};

export default SaleOrderFormInput;
