import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  background-color: ${(props) => props.theme.main.primary};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 5px;
  width: 110px;
  justify-content: center;
  align-items: center;
  flex-basis: 0;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.main.neutral};
`;
