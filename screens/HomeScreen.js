import React from "react";
import styles from "../Styles.js";
import { Text, View, TouchableHighlight } from "react-native";
import { TabNavigator } from "react-navigation";

export default class Home extends React.Component {
  state = {
    currentId: 0,
    users: [
      { id: 1, username: "Jan", balance: 6.05 },
      { id: 2, username: "Koen", balance: -12.8 },
      { id: 3, username: "Rene", balance: 8 }
    ]
  };

  payDebt = () => {
    const users = [...this.state.users];
    const user = users[this.state.currentId];
    users[user.id].balance = 0;
    //this.setState({ users });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>{this.formatBalance()}</Text>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={this.payDebt()}
        >
          <Text style={styles.buttonText}>PAY-OFF DEBT</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("Trips", this.props.navigation.state.params)}
        >
          <Text style={styles.buttonText}>VIEW TRIPS</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("AddTrip")}
        >
          <Text style={styles.buttonText}>NEW TRIP</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("AddExpense")}
        >
          <Text style={styles.buttonText}>CHOOSE EXPENSE</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("LogIn", "")}
        >
          <Text style={styles.buttonText}>LOG OUT</Text>
        </TouchableHighlight>
      </View>
    );
  }

  formatBalance() {
    const name = this.props.navigation.state.params;
    const users = this.state.users;
    const user = users.filter(u => u.username == name)[0];

    this.setState({ currentId: user.id });
    /*if (user == undefined) {
      user.username = name;
      user.balance = 0;
      users.push(user);
      this.setState({ users: users });
    }*/
    return "Welcome " + name + "! Your balance is €" + user.balance;
  }
}
