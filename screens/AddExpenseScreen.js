import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Picker
} from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import styles from "../Styles.js";
import CheckBox from "react-native-check-box";
import { expensedb, userdb } from "../App";

export default class AddTrip extends React.Component {
  state = {
    trip: expensedb.getCurrentTrip(),
    title: "",
    date: "",
    type: "",
    amount: 0,
    splitEvenly: true,
    payer: "",
    participants: [{ usernamex: "", balance: 0 }]
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView onContentSizeChange={this.onContentSizeChange}>
        <View style={styles.formView}>
          <FormLabel>Title</FormLabel>
          <FormInput onChangeText={title => this.setState({ title })} />
          <FormLabel>Expense-type</FormLabel>
          <Picker
            style={styles.textInput}
            selectedValue={this.state.category}
            onValueChange={(value, Index) => this.setState({ type: value })}
          >
            <Picker.Item label="Food" value="Food" />
            <Picker.Item label="Drink" value="Drink" />
            <Picker.Item label="Transport" value="Transport" />
            <Picker.Item label="Tickets" value="Tickets" />
            <Picker.Item label="Hotel" value="Hotel" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
          <FormLabel>Date</FormLabel>
          <FormInput
            placeholder="DD/MM/YYYY"
            onChangeText={date => this.setState({ date })}
          />
          <FormLabel>Payed by</FormLabel>
          <FormInput onChangeText={payer => this.setState({ payer })} />
          <FormLabel>Amount</FormLabel>
          <FormInput onChangeText={amount => this.setState({ amount })} />
          <CheckBox
            style={{ flex: 1, padding: 10 }}
            onClick={() => {
              this.setState({
                splitEvenly: !this.state.splitEvenly
              });
            }}
            isChecked={this.state.splitEvenly}
            leftText={"split evenly"}
          />
          <FormLabel>Participants</FormLabel>
          {this.state.participants.map((par, index) => {
            if (this.state.splitEvenly) {
              return (
                <View>
                  <FormInput
                    placeholder="username"
                    defaultValue={par.username}
                    onChangeText={username =>
                      this.handleParticantsName(username, index)
                    }
                  />
                </View>
              );
            } else {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <FormInput
                    placeholder="username"
                    style={styles.usernameInput}
                    defaultValue={par.username}
                    onChangeText={username =>
                      this.handleParticantsName(username, index)
                    }
                  />
                  <FormInput
                    style={styles.balanceInput}
                    defaultValue="0"
                    onChangeText={balance =>
                      this.handleParticantsBalance(username, index)
                    }
                  />
                </View>
              );
            }
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
            onPress={() => navigate("Trips")}
          >
            <Text style={styles.buttonText}>BACK</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }

  handleParticantsName(username, index) {
    let par = this.state.participants;
    par[index].username = username;
    this.setState({ participants: par });
  }

  handleParticantsBalance(balance, index) {
    let par = this.state.participants;
    par[index].balance = balance;
    this.setState({ participants: par });
  }

  addParticipant = () => {
    let participants = this.state.participants;
    let newP = { username: "", balance: 0 };
    participants.push(newP);
    this.setState({ participants });
  };

  calculateBalances(par) {
    par.push({ username: this.state.payer, balance: 0 });

    let amount = this.state.amount;
    let amountPP = (this.state.amount / par.length).toFixed(2);

    for (let i = 0; i < par.length; i++) {
      par[i].balance =
        par[i].username == this.state.payer ? amount - amountPP : -amountPP;
    }
    return par;
  }

  calculateBalancesUneven(par) {
    let amountCombined = 0;
    let payerIndex;
    for (let i = 0; i < par.length; i++) {
      if (par[i].username == this.state.payer) payerIndex = i;
      amountCombined += par[i].balance;
    }
    par[payerIndex] = amountCombined;
  }

  submit = () => {
    let par = this.getValidParticipants();
    par = this.state.splitEvenly
      ? this.calculateBalancesEvenly(par)
      : this.calculateBalancesUneven(par);

    let expense = {
      id: 0,
      trip: this.state.trip,
      type: this.state.type,
      title: this.state.title,
      date: this.state.date,
      amount: this.state.amount,
      participants: par
    };
    if (par.length > 0 && this.state.title != "" && this.state.payer != "") {
      expensedb.addExpense(expense);
      this.props.navigation.navigate("Expenses");
    }
  };

  getValidParticipants() {
    let par = this.state.participants.filter(u => u.username != "");
    for (let i = 0; i < par.length; i++) {
      if (userdb.getUser() == null) userdb.addUser(username);
      for (let j = 1; j < par.length; j++) {
        if (par[i] == par[j] && i != j) par.pop(par[j]);
      }
    }
    return par;
  }
}
