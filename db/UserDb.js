import React from "react";
import users from "./users";
import { AsyncStorage } from "react-native";
import userData from "../db/users";

export default class UserDataBase {
  constructor() {
    this.users = [];
    this.currentUser = "";

    let usersJson = AsyncStorage.getItem("users");
    this.users = usersJson.length > 0 ? JSON.parse(usersJson) : userData;
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
    if (username == "") return null;
    let user = { username: username, balance: 0 };
    this.users.push(user);
    AsyncStorage.setItem("users", JSON.stringify(this.users));
    return user;
  }

  getUser(username) {
    let user = users.filter(u => u.username == username)[0];
    if (!user) {
      user = this.addUser(username);
    }
    return user;
  }

  updateUser(user) {
    let users = this.users;
    for (let i = 0; i < users.length; i++) {
      if ((users[i].username = user.username)) users[i] = user;
    }
    this.users = users;
    AsyncStorage.setItem("users", this.users);
  }

  setBalance(username, amount) {
    let user = this.getUser(username);
    user.balance = amount;
    this.updateUser(user);
  }

  addToBalance(username, amount) {
    let user = this.getUser(username);
    user.balance = (amount + user.balance).toFixed(2);
    this.updateUser(user);
  }
}
