import { Button } from "@chakra-ui/react";

const Buttons = ({text, color}) => {
  return (
    <Button colorScheme={color} size="xl" p="1rem">
      {text}
    </Button>
  );
};

export default Buttons;
