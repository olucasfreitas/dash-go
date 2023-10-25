import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, name, error = null, ...rest }, ref) {
    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor="password">{label}</FormLabel>}

        <ChakraInput
          id={name}
          name={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: "gray.900",
          }}
          size="lg"
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    );
  }
);
