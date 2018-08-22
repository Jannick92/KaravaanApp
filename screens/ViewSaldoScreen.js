import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import styles from '../Styles.js';

export default class ViewSaldo extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.main}>
            <Text>You have to pay nothing to nobody</Text>
        <TouchableHighlight
            style={styles.button}
            onPress={() => navigate("Home")}
            underlayColor="#2980b9">
      <Text style={styles.buttonText}>BACK</Text>
    </TouchableHighlight>
      </View>
    );
  }
}