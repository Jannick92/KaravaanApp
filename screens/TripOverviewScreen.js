import { Table, Row } from "react-native-table-component";
import React from "react";
import styles from "../Styles";
import { Text, ScrollView, TouchableHighlight, Image } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

export default class TripOverview extends React.Component {
  state = { username: "" };

  render() {
    const { navigate } = this.props.navigation;
    const tableHeaders = ["title", "type", "date", "amount"];
    return (
      <ScrollView
        onContentSizeChange={this.onContentSizeChange}
        contentContainerStyle={styles.main}
      >
        <Table>
          <Row data={tableHeaders} />
        </Table>
      </ScrollView>
    );
  }
}
