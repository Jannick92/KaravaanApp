import React from "react";
import tripData from "./trips";
import { AsyncStorage } from "react-native";

export default class TripDataBase {
  constructor() {
    this.trips = tripData;
    this.currentTrip = 0;
    
    AsyncStorage.setItem("trips", tripData);
    /*AsyncStorage.getItem("trips").then(data => {
      this.trips = data.length > 0 ? JSON.parse(data) : tripData;
    });*/
  }

  getTrips() {
    return this.trips;
  }

  setCurrentTrip(id){
    this.currentTrip = id;
  }

  getCurrentTrip(){
    return this.currentTrip;
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
    this.trips.push(trip);
    AsyncStorage.setItem("trips", this.trips);
  }

  getTrip(id) {
    return this.trips.filter(trip => trip.id == id)[0];
  }

  addParticipantToTrip(id, username) {
    let trip = getTrip(id);
    trip.participants.push({ username: username, balance: 0, payed: 0 });
    this.updateTrip(trip);
  }

  updateTrip(trip) {
    let trips = this.trips;
    for (let i = 0; i < trips.length; i++) {
      if (trips[i].id == trip.id) trips[i] = trip;
    }
    this.trips = trips;
  }

  updateBalances(expense) {
    let expPar = expense.participants;
    let trip = getTrip(expense.trip);
    let par = trip.participants;
    for (let i = 0; i < expPar.length; i++) {
      if (par.filter(u=> u.username == expPar[i])[0]==null) {
        par.push({ username: expPar[i].username, balance:expPar[i].balance , payed: 0 });
      } else {
        for (let j = 0; j < par.length; j++) {
          if (expPar[i].username == par[j].username) par[j].balance += expPar[i].balance;
        }
      } 
    }
    trip.participants = par;
    this.updateTrip(par);
  }
  getParticipants(tripId){
    return this.getTrip(tripId).participants;
  }
}
