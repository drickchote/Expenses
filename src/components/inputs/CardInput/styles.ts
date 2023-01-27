import styled from "styled-components/native";

export const Container = styled.View`
  margin: 28px;
`;

export const TitleContainer = styled.View`
  background-color: ${(props) => props.theme.main.primary};
  padding: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.main.neutral};
  font-size: 13px;
  text-transform: uppercase;
`;
