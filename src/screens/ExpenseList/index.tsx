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


const handleEmptyListPress = (navigation) =>{
    navigation.navigate("addExpense")
}

interface SectionType {
    title: typeof MONTHS[number]; 
    data: Expense[]
}

const convertListToSections = (data: Expense[]): SectionType[] => {
    type months = typeof MONTHS[number]
    const list = {} as Record<months, Expense[]>

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

    const [expenses, setExpenses] = useState<Expense[]>([])
   

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
                        date={item.date}
                        description={item.description}
                        value={item.value}
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