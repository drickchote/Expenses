import { Pressable, Text, View } from "react-native";
import { ButtonContainer, Title } from "./styles";

interface SecondaryButtonProps {
  title: string;
  onPress(): void;
}

const SecondaryButton = ({ title, onPress }: SecondaryButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <ButtonContainer>
        <Title>{title}</Title>
      </ButtonContainer>
    </Pressable>
  );
};

export default SecondaryButton;
