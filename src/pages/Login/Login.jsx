import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const formbg = useColorModeValue("gray.300", "gray.600");
  const color = useColorModeValue("gray.700", "gray.300");

  return (
    <Box
      borderRadius="lg"
      boxShadow="lg"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        maxW="60%"
        w="40%"
        h="60%"
        bg={formbg}
        p="5rem"
        borderRadius="lg"
        color={color}
      >
        <Heading textAlign="center">LOGIN</Heading>
        <FormControl isInvalid={errors.email}>
          <FormLabel fontSize="3xl" my="1rem" htmlFor="email">
            Email
          </FormLabel>
          <Input
            type="email"
            size="lg"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          <FormErrorMessage fontSize="2xl">
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <FormLabel fontSize="3xl" my="1rem" htmlFor="password">
            Password
          </FormLabel>
          <Input
            type="password"
            id="password"
            size="lg"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "password must be at least 6 characters",
              },
            })}
          />
          <FormErrorMessage fontSize="2xl">
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          fontSize="1.5rem"
          p="2rem"
          size="lg"
          my="2rem"
        >
          Login
        </Button>
        <Text>
          Don&apos;t have an account, create one :-{" "}
          <Link to="/signup" style={{ fontWeight: "800", color: "#17181c" }}>
            Signup
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
