import { Box, Container, Flex, useStatStyles } from "@chakra-ui/react";
import Buttons from "../../components/Buttons";
import ColorModeSwitch from "../../components/ColorModeSwitch";
import SaleOrderModal from "../../components/SaleOrderModal";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Container maxW="100vw" p="3rem">
      {/* buttons start */}
      <Flex justifyContent="space-between">
        <Box>
          <Buttons color="blue" text="Active Sale Orders" />
          <Buttons color="green" text="Completed Sale Orders" />
        </Box>
        <Flex>
          <ColorModeSwitch />
          <Buttons color="yellow" text="+ Sale order" onClick={openModal} />
          <SaleOrderModal isOpen={isOpen} onClose={closeModal}/>
        </Flex>
      </Flex>
      {/* buttons end */}
    </Container>
  );
};

export default Home;
