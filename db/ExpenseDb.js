import React from "react";
import expenseData from "./expenses";
import { AsyncStorage } from "react-native";
import { userdb } from "../App";

export default class ExpenseDataBase {
  constructor() {
    this.expenses = [];
    this.currentTrip = 0;
    //AsyncStorage.setItem("expenses", JSON.stringify(expenseData));
    AsyncStorage.getItem("expenses").then(data => {
      this.expenses = data.length > 0 ? JSON.parse(data) : expenseData;
    });
  }

  getExpenses() {
    return this.expenses;
  }

  setCurrentTrip(id) {
    this.currentTrip = id;
  }

  getCurrentTrip() {
    return this.currentTrip;
  }

  getExpensesFromCurrentTrip() {
    return this.expenses.filter(e => e.trip == this.currentTrip);
  }

  getExpensesUserList(username) {
    let result = [];

    let exp =
      this.currentTrip > 0 ? this.getExpensesFromCurrentTrip() : this.expenses;

    for (let i = 0; i < exp.length; i++) {
      let expense = exp[i];
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

  addExpense(expense) {
    expense.id = this.expenses.length + 1;
    let par = expense.participants;

    for (let i = 0; i < par.length; i++)
      userdb.addToBalance(par[i].username, par[i].balance);

    this.expenses.push(expense);
    AsyncStorage.setItem("expenses", this.expenses);
  }

  getExpense(id) {
    return this.trips.filter(trip => trip.title == title)[0];
  }
}
