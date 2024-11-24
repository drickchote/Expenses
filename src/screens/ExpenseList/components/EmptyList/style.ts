import styled from "styled-components";

export const CenteredContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const ButtonContainer = styled.View`
    background-color: ${(props) => props.theme.main.primary};
    padding 5px;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
`