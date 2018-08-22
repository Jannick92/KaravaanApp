import React from "react";
import styles from "../Styles.js";
import { Text, View, TouchableHighlight, Button } from "react-native";

export default class Trip extends React.Component {
  state = {
    id: this.props.trip.id,
    title: this.props.trip.title,
    type: this.props.trip.type,
    participants: this.props.trip.participants,
    currency: this.props.trip.currency
  };

  render() {
    return (
      <View>
        <TouchableHighlight style={styles.button}>
          <Text>
            title = {this.state.title}, type = {this.state.type}
          </Text>
        </TouchableHighlight>
        <Button
          title="del"
          onPress={() => this.props.onDelete(this.state.id)}
        />
      </View>
    );
  }
}
