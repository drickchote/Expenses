import React, { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { useTheme } from "styled-components";
import CardInput from "../../components/inputs/CardInput";
import { InputType } from "../../components/inputs/types";
import { Container, Title, TitleContainer } from "./styles";

const AddExpense = () => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("0,00");

  const handleDescriptionChange = () => {};
  const handleTypeChange = () => {};
  const handleValueChange = () => {};

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../assets/addExpenseBackground.png")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.2 }}
        style={{ flex: 1 }}
      >
        <Container>
          <TitleContainer>
            <Title>Adicionar Gasto</Title>
          </TitleContainer>

          <CardInput
            title="Descrição"
            type="text"
            text={description}
            onChange={handleDescriptionChange}
          />
          <CardInput
            title="Tipo"
            type="select"
            text={type}
            onChange={handleTypeChange}
          />
          <CardInput
            title="Valor"
            type="money"
            text={value}
            onChange={handleValueChange}
          />
        </Container>
      </ImageBackground>
    </View>
  );
};

export default AddExpense;
