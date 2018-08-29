import React from "react";
import { Text, View, ScrollView, TouchableHighlight } from "react-native";
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
    participants: [{ username: userdb.getCurrentUser(), balance: 0, payed: 0 }]
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView onContentSizeChange={this.onContentSizeChange}>
        <View style={styles.formView}>
          <FormLabel>Title</FormLabel>
          <FormInput onChangeText={title => this.setState({ title })} />
          <FormLabel>Type</FormLabel>
          <FormInput onChangeText={type => this.setState({ type })} />
          <FormLabel>Participants</FormLabel>
          {this.state.participants.map((par, index) => {
            return (
              <View>
                <FormInput
                  defaultValue={par.username}
                  onChangeText={username =>
                    this.handleParticants(username, index)
                  }
                />
              </View>
            );
          })}
          <TouchableHighlight
            style={styles.bottomButton}
            onPress={() => this.addParticipant()}
          >
            <Text style={styles.buttonText}>ADD PARTICIPANT</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButton} onPress={this.submit}>
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.bottomButton}
            onPress={() => navigate("Home")}
          >
            <Text style={styles.buttonText}>BACK</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }

  handleParticants(username, index) {
    let par = this.state.participants;
    par[index].username = username;
    this.setState({ participants: par });
  }

  addParticipant = () => {
    let participants = this.state.participants;
    let newP = { username: "" };
    participants.push(newP);
    this.setState({ participants });
  };
  submit = () => {
    let par = this.getValidParticipants();
    let trip = {
      id: 0,
      title: this.state.title,
      type: this.state.type,
      participants: par
    };
    if (par.length > 0 && this.state.title != "") {
      console.log("mqksdjfmlkq");
      tripdb.addTrip(trip);
      this.props.navigation.navigate("Trips");
    }
  };

  getValidParticipants() {
    let par = this.state.participants.filter(u => u.username != "");
    for (let i = 0; i < par.length; i++) {
      if (userdb.getUser() == null) userdb.addUser(username);
      for (let j = 0; j < par.length; j++) {
        if (par[i] == par[j] && i != j) par.pop(par[j]);
      }
    }
    return par;
  }
}
