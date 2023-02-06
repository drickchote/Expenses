import { Text, View } from "react-native";
import { Expense } from "../../shared/types";
import { formatMoney } from "../../shared/utils";
import {
    Container,
    DateContainer,
    Day,
    Description,
    ItemContainer,
    Month,
    Value,
} from "./style";

export const ExpenseListItem = ({ description, date, value }: Expense) => {
    return (
        <Container>
            <DateContainer>
                <Day>{String(date.getDate()).padStart(2, "0")}</Day>
                <Month>
                    {date
                        .toLocaleString("default", { month: "short" })
                        .replace(".", "")}
                </Month>
            </DateContainer>
            <ItemContainer>
                <Description>{description}</Description>
                <Value>R$ {formatMoney(value)}</Value>
            </ItemContainer>
        </Container>
    );
};
