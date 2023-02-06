import { getFirestore } from "firebase/firestore";
import { SectionList, Text } from "react-native";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import { firestone } from "../../config/firebaseConfig";
import { Screen } from "../../shared/styles";
import { Header, SectionTitle, SectionTitleContainer } from "./styles";

const data = [
    {
        title: "Outubro",
        data: [
            {
                description: "Bic Mac",
                value: 49.99,
                date: new Date("2023-10-12"),
                type: "besteiras",
            },
            {
                description: "Milk Shake + Batata",
                value: 49.99,
                date: new Date("2023-10-08"),
                type: "besteiras",
            },
            {
                description: "Mc com Mariel",
                value: 49.99,
                date: new Date("2023-10-25"),
                type: "besteiras",
            },
        ],
    },
    {
        title: "Novembro",
        data: [
            {
                description: "Mc com Mariel",
                value: 49.99,
                date: new Date("2023-11-25"),
                type: "besteiras",
            },
            {
                description: "Mc com Mariel",
                value: 49.99,
                date: new Date("2023-11-25"),
                type: "besteiras",
            },
        ],
    },
];

export const ExpenseList = () => {
    const db = getFirestore(firestone);

    return (
        <Screen>
            <Header></Header>
            <SectionList
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
