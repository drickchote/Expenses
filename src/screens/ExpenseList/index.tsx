import React from "react";
import { SectionList } from "react-native";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import { Screen } from "../../shared/styles";
import { Header, HeaderText, SectionTitle, SectionTitleContainer } from "./styles";
import EmptyList from "./components/EmptyList";
import { Expense } from "../../shared/types";
import { DEFAULT_BUDGET_VALUE, MONTHS } from "../../shared/contants";
import { useCallback, useMemo, useState } from "react";
import { buildExpenseService } from "../../app/factories/services/ExpenseServiceFactory";
import { useFocusEffect } from "@react-navigation/native";
import { BaseEntity } from "../../db/storage";
import { buildBudgetService } from "../../app/factories/services/BudgetServiceFactory";
import {  daysLeftInThisMonth, formatMoney } from "../../shared/utils";


interface SectionType {
    title: typeof MONTHS[number]; 
    data: (Expense & BaseEntity)[]
}

const handleEmptyListPress = (navigation) =>{
    navigation.navigate("addExpense")
}



const convertListToSections = (data: (Expense & BaseEntity)[]): SectionType[] => {
    type months = typeof MONTHS[number]
    const list = {} as Record<months, (Expense & BaseEntity)[]>

    const sortedData = data.sort((a,b) => a.date.getTime() - b.date.getTime())

    sortedData.forEach((expense) => {
        const month = expense.date.getMonth()
        if(list[MONTHS[month]]){
            list[MONTHS[month]].push(expense)
        } else {
            list[MONTHS[month]] = [expense]
        }
    })


    const sections = [] as SectionType[]

    MONTHS.forEach(month => {
        if(list[month]){
            sections.push({
                title: month,
                data: list[month]
            })
        }
    })


    return sections
}

const getExpenses = async () => {
    const expenseService = buildExpenseService()
    return expenseService.getAll()
}

const getCurrentMonthBudget = async () => {
    const budgetService = buildBudgetService()
    return budgetService.getCurrentMonthBudget()
}

const ExpenseList =  ({navigation}) => {

    const [expenses, setExpenses] = useState<(Expense & BaseEntity)[]>([])
    const [currentMonthBudget, setCurrentMonthBudget] = useState<number>(0)

    const handleDelete = async(id: string) => {
        const expenseService = buildExpenseService()
        const deleted = await expenseService.delete(id)
        setExpenses(current => current.filter(expense => expense.id !== deleted.id))
    }

    useFocusEffect(
        useCallback(() => {
            getExpenses().then(data => {
                setExpenses(data)
            })
        }, [])
    )

    const expensesSections = useMemo(() => convertListToSections(expenses), [expenses])    
    getCurrentMonthBudget().then(data => {
        setCurrentMonthBudget(data?.value || DEFAULT_BUDGET_VALUE)
    })

    const calculateBudget = (expenses: (Expense & BaseEntity)[]) => {
        const total = expenses.reduce((acc, expense) => {
            const today = new Date()

            // if the expense is today, don't add to the total
            if(expense.date.getDate() === today.getDate() && expense.date.getMonth() === today.getMonth() && expense.date.getFullYear() === today.getFullYear()){
                return acc
            }
            return acc + expense.value
        },  0)
        return currentMonthBudget - total
    }

    const calculateDailyBudget = (expenses: (Expense & BaseEntity)[]) => {
        const budget = calculateBudget(expenses)
        return parseFloat((budget / daysLeftInThisMonth()).toFixed(2))
    }

    const calculateTodayExpenses = (expenses: (Expense & BaseEntity)[]) => {
        const today = new Date()
        const todayExpenses = expenses.filter(expense => expense.date.getDate() === today.getDate() && expense.date.getMonth() === today.getMonth() && expense.date.getFullYear() === today.getFullYear())
        return todayExpenses.reduce((acc, expense) => acc + expense.value, 0)
    }

    const todayExpenses = useMemo(() => calculateTodayExpenses(expenses), [expenses])


    return (
        <Screen> 
            <Header>
                <HeaderText>
                    Saldo: R${formatMoney(calculateBudget(expenses))} | Diário: R${formatMoney(calculateDailyBudget(expenses))} 
                </HeaderText>
                <HeaderText>
                     Hoje: R${formatMoney(todayExpenses)} | Restante: R${formatMoney(calculateDailyBudget(expenses) - todayExpenses)}
                </HeaderText>
            </Header>
            <SectionList
                ListEmptyComponent={<EmptyList onPress={() => handleEmptyListPress(navigation)}/>}
                contentContainerStyle={{flexGrow: 1}}
                sections={expensesSections}
                renderItem={({ item }) => (
                    <ExpenseListItem
                        expense={item}
                        handleDelete={handleDelete}
                    />
                )}
                renderSectionHeader={({ section }) => (
                    <SectionTitleContainer>
                        <SectionTitle>
                            {section.title.toUpperCase()}
                        </SectionTitle>
                    </SectionTitleContainer>
                )}
            ></SectionList>
        </Screen>
    );
};

export default ExpenseList