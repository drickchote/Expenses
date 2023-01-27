import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  justifyContent: "center",
  flex: 1,
})``;

export const TitleContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
`;
