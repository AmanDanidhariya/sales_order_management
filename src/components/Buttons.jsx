import { Button } from "@chakra-ui/react";

const Buttons = ({text, color}) => {
  return (
    <Button colorScheme={color} size="xl" p="1rem" borderRadius="lg" mx={3}>
      {text}
    </Button>
  );
};

export default Buttons;
