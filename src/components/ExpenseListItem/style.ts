import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 10px;
    border-color: #e5e5e5;
    border-width: 1px;
    justify-content: space-between;
`;

export const Day = styled.Text`
    color: ${(props) => props.theme.main.primary};
    font-weight: bold;
    font-size: 18px;
`;
export const Month = styled.Text`
    color: ${(props) => props.theme.main.primary};
`;
export const Description = styled.Text`
    font-weight: 500;
    font-size: 16px;
`;
export const Value = styled.Text``;

export const DateContainer = styled.View`
    border-right-color: #ccc;
    border-right-width: 1px;
    padding-left: 20px;
    padding-right: 10px;
`;

export const ItemContainer = styled.View`
    justify-content: center;
    margin-left: 20px;
`;

export const RemoveButtonContainer = styled.View`
    margin-right: 20px;
    justify-content: center
`
