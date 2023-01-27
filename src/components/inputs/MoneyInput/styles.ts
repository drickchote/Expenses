import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.main.neutral};
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
