import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AddExpense from "../../screens/AddExpense";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { ExpenseList } from "../../screens/ExpenseList";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="ADICIONAR GASTO"
          component={AddExpense}
          options={{ tabBarIcon: () => <AntDesign name="plus" size={24} /> }}
        />
        <Tab.Screen name="Lista de gastos" component={ExpenseList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
