import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import ViewSaldoScreen from "./screens/ViewSaldoScreen";
import AddTripScreen from "./screens/AddTripScreen";
import LogInScreen from "./screens/LogInScreen";
import TripsScreen from "./screens/TripsScreen";
import ExpensesScreen from "./screens/ExpensesScreen";
import TripOverviewScreen from "./screens/TripOverviewScreen";
import { createStackNavigator } from "react-navigation";
import UserDb from "./db/UserDb";
import TripDb from "./db/TripDb";
import ExpenseDb from "./db/ExpenseDb";

export const userdb = new UserDb();
export const tripdb = new TripDb();
export const expensedb = new ExpenseDb();

const Navigation = createStackNavigator({
  LogIn: { screen: LogInScreen },
  Home: { screen: HomeScreen },
  Expenses: { screen: ExpensesScreen },
  AddExpense: { screen: AddExpenseScreen },
  ViewSaldo: { screen: ViewSaldoScreen },
  AddTrip: { screen: AddTripScreen },
  Trips: { screen: TripsScreen },
  TripOverview: { screen: TripOverviewScreen }
});

export default Navigation;
