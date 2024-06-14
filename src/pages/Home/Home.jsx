import { Box, Container, Flex } from "@chakra-ui/react";
import Buttons from "../../components/Buttons";
import ColorModeSwitch from "../../components/ColorModeSwitch";

const Home = () => {
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
          <Buttons color="yellow" text="+ Sale order" />
        </Flex>
      </Flex>
      {/* buttons end */}
    </Container>
  );
};

export default Home;
