import React from "react";
import styles from "../Styles.js";
import { Text, View, TouchableHighlight, Image } from "react-native";

export default class User extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Welcome {this.props.user.username}! Your balance is €
          {this.props.user.balance}
        </Text>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => this.props.onReset(this.props.user)}
        >
          <Text style={styles.buttonText}>PAY</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
