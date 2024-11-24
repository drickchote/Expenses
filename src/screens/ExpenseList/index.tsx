import { SectionList } from "react-native";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import { Screen } from "../../shared/styles";
import { Header, SectionTitle, SectionTitleContainer } from "./styles";
import EmptyList from "./components/EmptyList";
import { useNavigation } from "@react-navigation/native";


const handleEmptyListPress = (navigation) =>{
    navigation.navigate("addExpense")
}

export const ExpenseList = ({navigation}) => {
    const data = []
    return (
        <Screen>
            <Header></Header>
            <SectionList
                ListEmptyComponent={<EmptyList onPress={() => handleEmptyListPress(navigation)}/>}
                contentContainerStyle={{flexGrow: 1}}
                sections={data}
                renderItem={({ item }) => (
                    <ExpenseListItem
                        date={item.date}
                        description={item.description}
                        value={item.value}
                        type={item.type}
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
