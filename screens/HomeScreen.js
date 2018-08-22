import React from "react";
import styles from "../Styles.js";
import { Text, View, TouchableHighlight } from "react-native";
import { TabNavigator } from "react-navigation";
import User from "./User";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    const name = this.props.navigation.state.params;
    const user = this.state.users.filter(u => u.username == name)[0];
    this.state.currentUser = user.id;
  }
  state = {
    currentUser: 0,
    users: [
      { id: 1, username: "Jan", balance: 6.05 },
      { id: 2, username: "Koen", balance: -12.8 },
      { id: 3, username: "Rene", balance: 8 }
    ]
  };

  handleReset = user => {
    const users = [...this.state.users];
    const index = users.indexOf(user);
    users[index] = { ...user };
    users[index].balance = 0;
    this.setState({ users });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {this.state.users.map(user => {
          if (user.id == this.state.currentUser)
            return (
              <User key={user.id} user={user} onReset={this.handleReset} />
            );
        })}
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
}
