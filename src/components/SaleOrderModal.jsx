import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Spinner,
  Text,
  VStack,
  useStatStyles,
} from "@chakra-ui/react";
import { MultiSelect } from "chakra-multiselect";
import { useState } from "react";
import { UseFireStoreQuery } from "../context/firebase";

const arr = [
  { id: 0, value: "f" },
  { id: 1, value: "r" },
  { id: 2, value: "f" },
];
const product = {
  id: 247,
  selling_price: 32,
  max_retail_price: 32,
  amount: 33,
  unit: "kg",
  quantity_in_inventory: 0,
  product: 209,
};

const SaleOrderModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState([]);
  const { isLoading, error, data } = UseFireStoreQuery("product");

  const handleChange = (selectedValue) => {
    setValue(selectedValue);
  };

  let content;

  if (isLoading)
    content = (
      <Spinner
        my={10}
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal.500"
        size="xl"
      />
    );

  if (data) {
    content = (
      <Box my={5}>
        {data?.map((product) => (
          <Box key={product.id}>
            {product.sku &&
              product.sku.map((item) => (
                <Box key={item.id} p={3} borderRadius="lg" boxShadow="md">
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
                    <VStack>
                      <Text fontSize="xl" fontWeight="600">
                        Selling Rate
                      </Text>
                      <Input type="number" placeholder="Enter Selling rate" />
                    </VStack>

                    <VStack>
                      <Text fontSize="xl" fontWeight="600">
                        Total items
                      </Text>
                      <Input type="number" placeholder="Enter Quantity" />
                    </VStack>
                  </Flex>
                  <Flex justifyContent="flex-end">
                    <Badge
                      fontSize="1.1rem"
                      p={2}
                      borderRadius="2xl"
                      colorScheme="green"
                    >
                      {item.quantity_in_inventory} Item(s) Remaining
                    </Badge>
                  </Flex>
                </Box>
              ))}
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalHeader fontSize="5xl" color="teal" textAlign="center">
          Sale Order Form
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <MultiSelect
            options={arr}
            label="All Products"
            value={value}
            onChange={handleChange}
          />
          {content}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;
