import React from "react";
import {
  Text,
  ScrollView,
  TouchableHighlight,
  AsyncStorage,
  View
} from "react-native";
import styles from "../Styles.js";
import { tripdb, userdb } from "../App";

export default class Trips extends React.Component {
  render() {
    /*var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.state.trips = tripdb.getTrips();
      }, 3000);
    });*/
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
                <Text style={styles.listText}>{trip.title}</Text>
                <TouchableHighlight
                  style={styles.listButton}
                  onPress={() => this.handleDelete(trip.id)}
                >
                  <Text style={styles.buttonText}>DEL</Text>
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

  handleDelete = tripId => {
    //const trips = this.state.trips.filter(t => t.id != tripId);
    console.log("trip deleted");
  };
}
