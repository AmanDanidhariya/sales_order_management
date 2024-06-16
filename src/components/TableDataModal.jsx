import {
  Badge,
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import SaleOrderFormInput from "./SaleOrderFormInput";

const TableDataModal = ({ isOpen, onClose, modalData }) => {
  const [enteredModalData, setEnteredData] = useState(modalData);
  console.log(enteredModalData);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedItems = [...enteredModalData.items];
    updatedItems[index][name] = value;
    setEnteredData((prevData) => ({
      ...prevData,
      items: updatedItems,
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalCloseButton />
        <ModalBody>
          {" "}
          <Box my={5}>
            <Box p={3} borderRadius="lg" boxShadow="md">
              <Flex
                fontSize="2xl"
                fontWeight="600"
                borderBottom="1px solid gray"
                my={3}
              >
                <Text>1. SKU {enteredModalData.items[0].sku_id}</Text>
              </Flex>
              <Flex my={7} justifyContent="space-around">
                <SaleOrderFormInput
                  type="number"
                  placeholder="Enter Selling rate"
                  text="Selling Rate"
                  value={enteredModalData?.items[0].price}
                  name="rate"
                  onChange={(e) => handleInputChange(e, 0)}
                />
                <SaleOrderFormInput
                  type="number"
                  placeholder="Enter Quantity"
                  text="Total items"
                  name="quantity"
                  value={enteredModalData?.items[0].quantity}
                  onChange={(e) => handleInputChange(e, 0)}
                />
              </Flex>
              <Flex justifyContent="flex-end">
                <Badge
                  fontSize="1.1rem"
                  p={2}
                  borderRadius="2xl"
                  colorScheme="green"
                >
                  {enteredModalData.quantity_in_inventory || "0"} Item(s)
                  Remaining
                </Badge>
              </Flex>
            </Box>
          </Box>
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

export default TableDataModal;
