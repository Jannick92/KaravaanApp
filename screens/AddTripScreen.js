import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import styles from "../Styles.js";
import { tripdb, userdb } from "../App";

export default class AddTrip extends React.Component {
  state = {
    title: "",
    type: "",
    participant: [{ username: "" }]
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FormLabel>Title</FormLabel>
        <FormInput onChangeText={title => this.setState({ title })} />
        <FormLabel>Type</FormLabel>
        <FormInput onChangeText={type => this.setState({ type })} />
        <FormLabel>Participant</FormLabel>
        <FormInput
          onChangeText={participant => this.setState({ participant })}
        />
        <TouchableHighlight style={styles.bottomButton} onPress={this.submit}>
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("Home")}
        >
          <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableHighlight>
      </View>
    );
  }
  submit = () => {
    let current = userdb.getCurrentUser();
    let trip = {
      id: 0,
      title: this.state.title,
      type: this.state.type,
      participants: [
        { username: current },
        { username: this.state.participant }
      ]
    };
    tripdb.addTrip(trip);
    this.props.navigation.navigate("Trips");
  };
}
