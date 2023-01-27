import { Pressable, Text, View } from "react-native";
import { ButtonContainer, Title } from "./styles";

interface PrimaryButtonProps {
  title: string;
  onPress(): void;
}

const PrimaryButton = ({ title, onPress }: PrimaryButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <ButtonContainer>
        <Title>{title}</Title>
      </ButtonContainer>
    </Pressable>
  );
};

export default PrimaryButton;
