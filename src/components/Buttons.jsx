import { Button } from "@chakra-ui/react";

const Buttons = ({ text, color,onClick, ...props }) => {
  return (
    <Button
      colorScheme={color}
      size="xl"
      p="1rem"
      borderRadius="lg"
      mx={3}
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  );
};

export default Buttons;
