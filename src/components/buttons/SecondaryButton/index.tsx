import { TouchableOpacity } from "react-native";
import { ButtonContainer, Title } from "./styles";

interface SecondaryButtonProps {
  title: string;
  onPress(): void;
}

const SecondaryButton = ({ title, onPress }: SecondaryButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer>
        <Title>{title}</Title>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
