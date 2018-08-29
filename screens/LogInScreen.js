import React from "react";
import styles from "../Styles";
import { Text, ScrollView, TouchableHighlight, Image } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

export default class LogIn extends React.Component {
  state = { username: "" };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView
        onContentSizeChange={this.onContentSizeChange}
        contentContainerStyle={styles.main}
      >
        <Image style={styles.Image} source={require("../karavaan.jpg")} />
        <FormLabel>Enter Username</FormLabel>
        <FormInput onChangeText={username => this.setState({ username })} />
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate("Home", this.state.username)}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
