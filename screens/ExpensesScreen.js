import React from "react";
import { Text, ScrollView, TouchableHighlight, View } from "react-native";
import styles from "../Styles.js";
import { expensedb, userdb } from "../App";

export default class Expenses extends React.Component {
  state = {
    currentUser: userdb.getCurrentUser()
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView onContentSizeChange={this.onContentSizeChange}>
        <View>
          {expensedb
            .getExpensesUserList(this.state.currentUser)
            .map(expense => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Text style={styles.listText}>{expense.title}</Text>
                  <Text style={styles.listText}>{expense.date}</Text>
                  <Text style={styles.listText}>€{expense.balance}</Text>
                </View>
              );
            })}
        </View>
        <TouchableHighlight
          style={styles.bottomButton}
          onPress={() => navigate("AddExpense")}
        >
          <Text style={styles.buttonText}>ADD EXPENSE</Text>
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
}
