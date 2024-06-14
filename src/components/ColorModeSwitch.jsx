import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";


const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch size="lg" colorScheme="teal" isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
      <Text fontSize="3xl">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
