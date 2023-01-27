import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import CardInput from "../../components/inputs/CardInput";
import { ButtonsContainer } from "../../styles";
import { formatMoney } from "../../utils";
import { Container, Title, TitleContainer } from "./styles";

const AddExpense = () => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState(formatMoney(0));

  const handleDescriptionChange = () => {};
  const handleTypeChange = () => {};
  const handleValueChange = () => {};

  const handleAddExpense = () => {};
  const handleClean = () => {
    setDescription("");
    setType("");
    setValue(formatMoney(0));
  };

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
          <ButtonsContainer>
            <SecondaryButton onPress={handleClean} title="Limpar" />
            <PrimaryButton onPress={handleAddExpense} title="Salvar" />
          </ButtonsContainer>
        </Container>
      </ImageBackground>
    </View>
  );
};

export default AddExpense;
