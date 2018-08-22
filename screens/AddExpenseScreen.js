import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Picker,
  Button
} from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import styles from "../Styles.js";
import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({
  id: t.Integer,
  name: t.String,
  balance: t.Number
});

export default class AddExpense extends React.Component {
  state = {
    expense: {
      payer: "",
      amount: 0,
      currency: "euro",
      borrowers: [{ username: "" }],
      type: ""
    }
  };
  submit() {
    var value = this.refs.form.getValue();
    if (value) {
      console.log(value);
      navigate("Home");
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView onContentSizeChange={this.onContentSizeChange}>
        <View style={styles.formView}>
          <FormLabel>Participants</FormLabel>
          <FormInput />
          <FormLabel>Type of expense</FormLabel>
          <FormInput value={this.state.expense.type} />
          <FormLabel>Amount</FormLabel>
          <FormInput type={number} value={this.state.expense.amount} />
          <FormLabel>Payed by</FormLabel>
          <FormInput value={this.state.expense.payer} />
        </View>
        <TouchableHighlight style={styles.bottomButton} onPress={this.submit}>
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("Home")}
        >
          <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
