import React, { createRef } from "react";
import { Pressable, TextInput } from "react-native";
import { InputProps } from "../types";
import { Container } from "./styles";

const GenericInput = ({ text, onChange }: InputProps) => {
  const inputRef = createRef<TextInput>();

  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  return (
    <Pressable onPress={focusInput}>
      <Container>
        <TextInput ref={inputRef} value={text} onChangeText={onChange} />
      </Container>
    </Pressable>
  );
};
export default GenericInput;
