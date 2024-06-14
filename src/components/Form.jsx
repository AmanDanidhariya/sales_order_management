import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const Form = ({isLogin}) => {
  return (
    <Box
      borderRadius="lg"
      boxShadow="lg"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      
    >
      <FormControl maxW="40vw" h="50%" bg="gray.600" p="5rem"  borderRadius="lg">
        <FormLabel fontSize="3xl" my="1rem">Email</FormLabel>
        <Input type="email" size="lg" />
        <FormLabel fontSize="3xl" my="1rem">Password</FormLabel>
        <Input type="password" size="lg" />
        <Button colorScheme="teal" fontSize="1.5rem" p="2rem" size='lg' my="2rem">{isLogin ? "Login":"Submit"}</Button>
      </FormControl>
    </Box>
  )
}

export default Form