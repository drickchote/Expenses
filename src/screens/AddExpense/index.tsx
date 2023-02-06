import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import CardInput from "../../components/inputs/CardInput";
import { ButtonsContainer } from "../../shared/styles";
import { formatMoney, moneyToFloat } from "../../shared/utils";
import { Container, Title, TitleContainer } from "./styles";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { firestone } from "../../config/firebaseConfig";

const AddExpense = () => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("initial type");
  const [value, setValue] = useState(0);
  const db = getFirestore(firestone);
  const collectionRef = collection(db, "expenses");

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };
  const handleTypeChange = (text: string) => {
    setType(text);
  };
  const handleValueChange = (moneyValue: string) => {
    setValue(moneyToFloat(moneyValue));
  };

  const handleAddExpense = async () => {
    await addDoc(collectionRef, {
      description,
      type,
      value,
      date: new Date()
    });

    handleClean();
  };
  const handleClean = () => {
    setDescription("");
    setType("");
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
            title="Tipo"
            type="text"
            text={type}
            onChange={handleTypeChange}
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
