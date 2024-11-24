import { Text, TouchableOpacity, View } from "react-native";
import {  Feather } from "@expo/vector-icons";
import { ButtonContainer, CenteredContainer } from "./style";
import theme from "../../../../shared/theme";

interface EmptyListProps {
    onPress(): void;
  }
  
const EmptyList = ({onPress}: EmptyListProps) => {
    return <CenteredContainer>
      <Text>Adicione uma despesa</Text>
      <TouchableOpacity onPress={onPress}>
        <ButtonContainer>
          <Feather name="plus" size={24} color={theme.main.neutral} />
        </ButtonContainer>
      </TouchableOpacity>
    </CenteredContainer>
}

export default EmptyList