import React from "react";
import styles from "../Styles.js";
import { Text, View, TouchableHighlight, AsyncStorage } from "react-native";
import { userdb, expensedb, tripdb } from "../App";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state.currentUser = userdb.getUser(this.props.navigation.state.params);
    userdb.setCurrentUser(this.state.currentUser.username);
  }

  state = {
    currentUser: {
      username: "",
      balance: 0.0
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    tripdb.setCurrentTrip(0);
    return (
      <View>
        <Text>
          Welcome {this.state.currentUser.username}! Your balance is €
          {this.state.currentUser.balance}
        </Text>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("Trips")}
        >
          <Text style={styles.buttonText}>VIEW TRIPS</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("Expenses")}
        >
          <Text style={styles.buttonText}>VIEW EXPENSES</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("LogIn")}
        >
          <Text style={styles.buttonText}>LOG OUT</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
