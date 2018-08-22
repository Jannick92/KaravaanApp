import React from "react";
import styles from "../Styles.js";
import { Text, View, TouchableHighlight, Image } from "react-native";

export default class User extends React.Component {
  state = {
    username: this.props.username,
    balance: this.props.balance
  };

  render() {
    return (
      <TouchableHighlight style={styles.button}>
        <Text>
          title = {this.state.username}, type = {this.state.type}
        </Text>
      </TouchableHighlight>
    );
  }
}
