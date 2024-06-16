import {
  Badge,
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import { MultiSelect } from "chakra-multiselect";
import { useState } from "react";
// import { UseFireStoreQuery } from "../context/firebase";
import SaleOrderFormCard from "./SaleOrderFormCard";
import { fetchData } from "../utils/http";
import { useQuery } from "@tanstack/react-query";

const arr = [
  { id: 0, value: "product_1" },
  { id: 1, value: "product_2" },
  { id: 2, value: "product_3" },
];

const SaleOrderModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState([]);

  const { isLoading, error, data, isError } = useQuery({
    queryKey: ["product"],
    queryFn: fetchData,
  });

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
  if (isError) {
    throw Error(error);
  }

  if (data) {
    content = (
      <Box my={5}>
        {data?.map((product) => (
          <Box key={product.id}>
            {product.sku &&
              product.sku.map((item) => (
                <SaleOrderFormCard key={item.id} item={item} />
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
          <Button
            fontWeight="700"
            colorScheme="red"
            mr={3}
            px={6}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;
