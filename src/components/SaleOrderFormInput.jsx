import { Input, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SaleOrderFormInput = ({ type, placeholder, text, value, onChange , name}) => {
  return (
    <VStack>
      <Text fontSize="xl" fontWeight="600">
        {text}
      </Text>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </VStack>
  );
};

export default SaleOrderFormInput;
