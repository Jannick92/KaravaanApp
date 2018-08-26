import React from "react";
import expenseData from "./expenses";
import { AsyncStorage } from "react-native";

export default class ExpenseDataBase {
  constructor() {
    this.expenses = expenseData;
    /*AsyncStorage.getItem("expenses").then(data => {
      this.expenses = data.length > 0 ? JSON.parse(data) : expenseData;
    });*/
  }

  getExpenses() {
    return this.expenses;
  }

  getExpensesUserList(username) {
    let result = [];
    for (let i = 0; i < this.expenses.length; i++) {
      let expense = this.expenses[i];
      for (let j = 0; j < expense.participants.length; j++) {
        if (expense.participants[j].username == username)
          result.push({
            title: expense.title,
            date: expense.date,
            balance: expense.participants[j].balance
          });
      }
    }
    return result;
  }

  /*addTrip(trip) {
    trip.id = this.trips.length + 1;
    this.trips.push(trip);
    AsyncStorage.setItem("trips", this.trips);
  }*/

  getExpense(id) {
    return this.trips.filter(trip => trip.title == title)[0];
  }

  addParticipantToTrip(id, username) {
    let trip = getTrip(id);
    trip.addParticipant(username);
  }
}
