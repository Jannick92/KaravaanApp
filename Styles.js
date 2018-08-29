import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

var styles = StyleSheet.create({
  usernameInput: {
    flex: 0.6
  },

  balanceInput: {
    flex: 0.3
  },
  listButton: {
    flex: 1,
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    width: responsiveWidth(10)
  },
  listText: {
    fontSize: 18,
    alignItems: "center",
    fontWeight: "bold",
    width: responsiveWidth(30),
    marginLeft: responsiveWidth(3)
  },
  main: {
    flex: 1,
    backgroundColor: "#42f492",
    alignItems: "center"
  },

  formView: {
    backgroundColor: "white",
    alignItems: "stretch",
    marginTop: responsiveHeight(1),
    padding: responsiveWidth(3)
  },

  button: {
    marginTop: responsiveHeight(3),
    padding: responsiveWidth(3),
    alignItems: "center"
  },

  textField: {
    color: "white",
    borderColor: "red"
  },

  bottomButton: {
    margin: responsiveHeight(1, 5),
    padding: responsiveWidth(3),
    alignItems: "center",
    backgroundColor: "#42f492"
  },

  buttonText: {
    alignItems: "center",
    fontSize: responsiveFontSize(2.5)
  },

  image: {
    alignSelf:"center",
    margin: responsiveHeight(3),
  }
});

module.exports = styles;
