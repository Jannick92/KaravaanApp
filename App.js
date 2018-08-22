import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import ViewSaldoScreen from "./screens/ViewSaldoScreen";
import AddTripScreen from "./screens/AddTripScreen";
import LogInScreen from "./screens/LogInScreen";
import TripsScreen from "./screens/TripsScreen";
import { createStackNavigator } from "react-navigation";

const Navigation = createStackNavigator({
  LogIn: { screen: LogInScreen },
  Home: { screen: HomeScreen },
  AddExpense: { screen: AddExpenseScreen },
  ViewSaldo: { screen: ViewSaldoScreen },
  AddTrip: { screen: AddTripScreen },
  Trips: { screen: TripsScreen }
});

export default Navigation;
