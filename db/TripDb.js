import React from "react";
import tripData from "./trips";
import Trip from "../class/Trip";
import { AsyncStorage } from "react-native";

export default class TripDataBase {
  constructor() {
    this.trips = tripData;
    AsyncStorage.setItem("trips", tripData);
    AsyncStorage.getItem("trips").then(data => {
      this.trips = data.length > 0 ? JSON.parse(data) : tripData;
    });
  }

  getTrips() {
    return this.trips;
  }

  getTripsFromPerson(username) {
    let result = [];
    for (let i = 0; i < this.trips.length; i++) {
      let trip = this.trips[i];
      for (let j = 0; j < trip.participants.length; j++) {
        if (trip.participants[j].username == username) result.push(trip);
      }
    }
    return result;
  }

  addTrip(trip) {
    trip.id = this.trips.length + 1;
    this.trips[this.trips.length] = trip;
    AsyncStorage.setItem("trips", this.trips);
  }

  getTrip(id) {
    return this.trips.filter(trip => trip.title == title)[0];
  }

  addParticipantToTrip(id, username) {
    let trip = getTrip(id);
    trip.addParticipant(username);
  }
}
