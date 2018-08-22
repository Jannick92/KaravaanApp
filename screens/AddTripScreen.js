import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import styles from '../Styles.js';
import t from 'tcomb-form-native';

const Form = t.form.Form;    
const Trip = t.struct({
  name: t.String,
  amount: t.Integer,
  //expenses: t.list(t.String),
});

const User = t.struct ({
  name: t.String,
  debt: t.Integer
})

export default class AddTrip extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
           <Form type={Trip} />

           <TouchableHighlight style={styles.bottomButton} onPress={this.submit}>
          <Text style={styles.buttonText}>SAVE</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButton} onPress={() => navigate("Home")}>
          <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableHighlight>
      </View>
    );
  }
}