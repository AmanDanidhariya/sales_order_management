import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useStatStyles,
} from "@chakra-ui/react";
import { MultiSelect } from "chakra-multiselect";
import { useState } from "react";

const SaleOrderModal = ({ isOpen, onClose }) => {
  const arr = [
    { id: 0, value: "f" },
    { id: 1, value: "r" },
    { id: 2, value: "f" },
  ];
  const [value, setValue] = useState([]);
  console.log(value);

  const handleChange = (selectedValue) => {
    setValue(selectedValue);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
          <ModalOverlay />
      {/* <ModalOverlay />
      <MultiSelect options={["k", "d", "u"]} label="All Products" />
      <ModalHeader>All</ModalHeader> */}
      <ModalContent>
        <ModalHeader fontSize="5xl">Sale Order Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <MultiSelect
            options={arr}
            label="All Products"
            value={value}
            onChange={handleChange}
          />
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
