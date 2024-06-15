import {
  Badge,
  Box,
  Flex,
  Input,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SaleOrderFormInput from "./SaleOrderFormInput";

const SaleOrderFormCard = ({ item }) => {
  return (
    <Box p={3} borderRadius="lg" boxShadow="md">
      <Flex
        fontSize="2xl"
        fontWeight="600"
        borderBottom="1px solid gray"
        my={3}
      >
        <Text>
          1. SKU {item.id} ({item.product} {item.unit})
        </Text>
        <Spacer />
        <Text>Rate : &#8377; {item.max_retail_price}</Text>
      </Flex>
      <Flex my={7} justifyContent="space-around">
        <SaleOrderFormInput
          type="number"
          placeholder="Enter Selling rate"
          text="Selling Rate"
        />
        <SaleOrderFormInput
          type="number"
          placeholder="Enter Quantity"
          text="Total items"
        />
      </Flex>
      <Flex justifyContent="flex-end">
        <Badge fontSize="1.1rem" p={2} borderRadius="2xl" colorScheme="green">
          {item.quantity_in_inventory} Item(s) Remaining
        </Badge>
      </Flex>
    </Box>
  );
};

export default SaleOrderFormCard;
