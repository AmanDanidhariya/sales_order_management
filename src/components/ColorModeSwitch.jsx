import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";


const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack mx={6}>
      <Switch size="lg" colorScheme="teal" isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
      <Text fontSize="3xl" fontWeight={800}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
