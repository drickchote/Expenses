import { createRef, useRef } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { MONEY_MASK } from "../../../utils";
import { InputProps } from "../types";
import { Container } from "./styles";

const MoneyInput = ({ text, onChange }: InputProps) => {
  const inputRef = createRef<TextInput>();

  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  return (
    <Pressable onPress={focusInput}>
      <Container>
        <Text>{MONEY_MASK}</Text>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput ref={inputRef} value={text} onChange={onChange} />
        </View>
      </Container>
    </Pressable>
  );
};

export default MoneyInput;
