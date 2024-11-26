import { SectionList } from "react-native";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import { Screen } from "../../shared/styles";
import { Header, SectionTitle, SectionTitleContainer } from "./styles";
import EmptyList from "./components/EmptyList";
import { Expense } from "../../shared/types";
import { MONTHS } from "../../shared/contants";
import { useCallback, useMemo, useState } from "react";
import { buildExpenseService } from "../../app/factories/services/ExpenseService";
import { useFocusEffect } from "@react-navigation/native";
import { BaseEntity } from "../../db/storage";


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

    data.forEach((expense) => {
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

const ExpenseList =  ({navigation}) => {

    const [expenses, setExpenses] = useState<(Expense & BaseEntity)[]>([])
   

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

    return (
        <Screen> 
            <Header></Header>
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