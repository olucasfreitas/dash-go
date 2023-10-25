import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, name, ...rest }, ref) {
    return (
      <FormControl>
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
      </FormControl>
    );
  }
);
