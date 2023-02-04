import { TouchableOpacity } from "react-native";
import { ButtonContainer, Title } from "./styles";

interface PrimaryButtonProps {
  title: string;
  onPress(): void;
}

const PrimaryButton = ({ title, onPress }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer>
        <Title>{title}</Title>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
