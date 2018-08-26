import React from "react";
import users from "./users";
import { AsyncStorage } from "react-native";
import userData from "../db/users";

export default class UserDataBase {
  constructor() {
    let usersJson = AsyncStorage.getItem("users");
    this.users = usersJson.length > 0 ? JSON.parse(usersJson) : userData;
    this.currentUser = "";
  }

  getUsers() {
    return this.users;
  }

  setCurrentUser(username) {
    this.currentUser = username;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  addUser(username) {
    let user = { username: username, balance: 0 };
    this.users.push(user);
    AsyncStorage.setItem("users", this.users);
  }

  getUser(username) {
    let user = users.filter(u => u.username == username)[0];
    if (!user) {
      user = { username: username, balance: 0 };
      users.push(user);
    }
    return user;
  }

  setBalance(username, amount) {
    this.getUser(username).balance = amount;
  }

  addToBalance(username, amount) {
    let user = this.getUser(username);
    user.balance = amount + user.balance;
  }
}
