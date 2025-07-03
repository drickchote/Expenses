import React from "react";
import { TouchableOpacity } from "react-native";
import { RowView } from "../../shared/styles";
import { Expense } from "../../shared/types";
import { formatMoney } from "../../shared/utils";
import {
    Container,
    DateContainer,
    Day,    
    Description,
    ItemContainer,
    Month,
    RemoveButtonContainer,
    Value,
} from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';
import { BaseEntity } from "../../db/storage";

interface ExpenseListItemProps {
    expense: Expense & BaseEntity;
    handleDelete(id: string): void;
}

export const ExpenseListItem = ({ expense,  handleDelete }: ExpenseListItemProps) => {
    const {id, description, value, date} = expense

    return (
        <Container key={id}>
            <RowView>
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
            </RowView>
            <TouchableOpacity onPress={() => handleDelete(id)}>
                <RemoveButtonContainer>
                    <Ionicons name="remove" size={24} color="red" />
                </RemoveButtonContainer>
            </TouchableOpacity>
        </Container>
    );
};
