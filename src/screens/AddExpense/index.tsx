import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import CardInput from "../../components/inputs/CardInput";
import { ButtonsContainer } from "../../shared/styles";
import { formatMoney, moneyToFloat } from "../../shared/utils";
import { Container, Title, TitleContainer } from "./styles";
import { buildExpenseService } from "../../app/factories/services/ExpenseServiceFactory";

const AddExpense = () => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

  const expenseService = buildExpenseService()

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  const handleValueChange = (moneyValue: string) => {
    setValue(moneyToFloat(moneyValue));
  };

  const handleAddExpense = async () => {
    const newExpense = {
      date: new Date(),
      description,
      value
    }
    await expenseService.insert(newExpense).catch(error => console.log(error))
    handleClean()
  };
  
  const handleClean = () => {
    setDescription("");
    setValue(0);
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
            title="Valor"
            type="money"
            text={formatMoney(value)}
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
