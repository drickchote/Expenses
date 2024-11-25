import { createRef } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { InputProps } from "../types";
import { Container } from "./styles";
import { MONEY_MASK } from "../../../shared/contants";

const MoneyInput = ({ text, onChange }: InputProps) => {
  const inputRef = createRef<TextInput>();

  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  //TODO disable copy and paste
  //TODO deal with error when user paster text

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
          <TextInput
            keyboardType="numeric"
            ref={inputRef}
            value={text}
            onChangeText={onChange}
          />
        </View>
      </Container>
    </Pressable>
  );
};

export default MoneyInput;
