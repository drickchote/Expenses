import React from "react";
import { createInput } from "../../../app/factories/inputFactory";
import { InputProps, InputType } from "../types";
import { Container, Title, TitleContainer } from "./styles";

interface CardInputProps {
  title: string;
  type: InputType;
}

const CardInput = ({
  title,
  type,
  text,
  onChange,
}: CardInputProps & InputProps) => {
  const cardInput = createInput({ type, text, onChange });

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      {cardInput}
    </Container>
  );
};

export default CardInput;
