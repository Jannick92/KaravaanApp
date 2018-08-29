import { Table, Row } from "react-native-table-component";
import React from "react";
import styles from "../Styles";
import { Text, ScrollView, TouchableHighlight, Image } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import { tripdb } from "../App";

export default class TripOverview extends React.Component {
  state = { username: "" };

  render() {
    const { navigate } = this.props.navigation;
    const tableHeaders = ["name", "balance", "payed"];
    console.log(tripdb.getCurrentTrip())
    return (
      <ScrollView
        onContentSizeChange={this.onContentSizeChange}
      >
        <Table>
          <Row data={tableHeaders} />
          {tripdb.getParticipants(tripdb.getCurrentTrip()).map(user => {
            data = [user.username, user.balance, user.payed]
            return <Row data={data} />;
          })}
        </Table>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("Trips")}
        >
          <Text style={styles.buttonText}>BACK</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
