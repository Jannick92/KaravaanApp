import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import styles from "../Styles.js";

import Trip from "./Trip";

export default class Trips extends React.Component {
  state = {
    trips: [
      {
        id: 1,
        title: "Rhone",
        type: "Frankrijk met Nadia en Willem",
        participants: [
          { username: "Jan" },
          { username: "Rene" },
          { username: "Karen" }
        ]
      },
      {
        id: 2,
        title: "Familie",
        type: "voor afspraken met de familie",
        participants: [{ username: "Jan" }, { username: "Koen" }]
      }
    ]
  };

  handleDelete = tripId => {
    console.log("event handler called for id: " + tripId);
    const trips = this.state.trips.filter(t => t.id != tripId);
    this.setState({ trips });
  };

  verify(trip) {
    for (let i = 0; i < trip.participants.length; i++) {
      if (trip.participants[i].username == this.props.navigation.state.params)
        return true;
    }
    return false;
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {this.state.trips.map(trip => {
          if (this.verify(trip))
            return (
              <Trip
                key={trip.id}
                trip={trip}
                onDelete={() => this.handleDelete(trip.id)}
              />
            );
        })}

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
      </View>
    );
  }
}
