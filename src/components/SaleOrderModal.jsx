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
  Text,
  VStack,
  useStatStyles,
} from "@chakra-ui/react";
import { MultiSelect } from "chakra-multiselect";
import { useState } from "react";

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

  const handleChange = (selectedValue) => {
    setValue(selectedValue);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalHeader fontSize="5xl">Sale Order Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <MultiSelect
            options={arr}
            label="All Products"
            value={value}
            onChange={handleChange}
          />
          {/* parent Box start*/}
          <Box m={4}>
            <Box p={3} boxShadow="md">
              <Flex
                fontSize="2xl"
                fontWeight="600"
                borderBottom="1px solid gray"
              >
                <Text my={3}>
                  1. SKU {product.id} ({product.product}
                  {product.unit})
                </Text>
                <Spacer />
                <Text>Rate : &#8377; {product.max_retail_price}</Text>
              </Flex>
              <Flex my={7} justifyContent="space-around">
                <VStack>
                  <Text fontSize="xl" fontWeight="600">
                    Selling Rate
                  </Text>
                  <Input placeholder="Enter Selling rate" />
                </VStack>

                <VStack>
                  <Text fontSize="xl" fontWeight="600">
                    Total items
                  </Text>
                  <Input placeholder="Enter Quantity" />
                </VStack>
              </Flex>
              <Flex  justifyContent="flex-end">
              <Badge fontSize="1.1rem" p={2} borderRadius="2xl" colorScheme='green'>46 Items(s) Remaining</Badge>
              </Flex>
            </Box>
          </Box>
          {/* parent Box end*/}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;
