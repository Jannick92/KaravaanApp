import React from "react";
import { Text, ScrollView, TouchableHighlight, View } from "react-native";
import styles from "../Styles.js";
import { tripdb, userdb, expensedb } from "../App";

export default class Trips extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView onContentSizeChange={this.onContentSizeChange}>
        <View>
          {tripdb.getTripsFromPerson(userdb.getCurrentUser()).map(trip => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <TouchableHighlight
                  style={styles.listButton}
                  onPress={() => this.tripNavigate(trip.id, "Expenses")}
                >
                  <Text style={styles.listText}>{trip.title}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.listButton}
                  onPress={() => this.tripNavigate(trip.id, "TripOverview")}
                >
                  <Text style={styles.buttonText}>OVERVIEW</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.listButton}
                  onPress={() => this.tripNavigate(trip.id, "AddExpense")}
                >
                  <Text style={styles.buttonText}>ADD BILL</Text>
                </TouchableHighlight>
              </View>
            );
          })}
        </View>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("AddTrip")}
        >
          <Text style={styles.buttonText}>ADD TRIP</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("Home")}
        >
          <Text style={styles.buttonText}>BACK</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }

  tripNavigate(id, url) {
    expensedb.setCurrentTrip(id);
    this.props.navigation.navigate(url);
  }
}
