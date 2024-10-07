import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AddExpense from "../../screens/AddExpense";
import {  Feather } from "@expo/vector-icons";
import { ExpenseList } from "../../screens/ExpenseList";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

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
          options={{ tabBarIcon: () => <Feather name="plus" size={24} /> }}
        />
        <Tab.Screen name="Lista de gastos" component={ExpenseList} 
          options={{ tabBarIcon: () => <Feather name="list" size={24} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
