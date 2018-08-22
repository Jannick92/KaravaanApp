import React from "react";
import styles from "../Styles.js";
import { Text, View, TouchableHighlight, Button } from "react-native";

export default class Trip extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight style={styles.button}>
          <Text>
            title = {this.props.trip.title}, type = {this.props.trip.type}
          </Text>
        </TouchableHighlight>
        <Button
          title="del"
          onPress={() => this.props.onDelete(this.props.trip.id)}
        />
      </View>
    );
  }
}
