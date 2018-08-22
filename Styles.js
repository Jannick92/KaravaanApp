import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

var styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#42f492',
      alignItems: 'stretch',
    },

    formView: {
      backgroundColor: 'white',
      alignItems: 'stretch',
      marginTop: responsiveHeight(1),
      padding: responsiveWidth(3),
    },

    button: {
      marginTop: responsiveHeight(3),
      padding: responsiveWidth(3),
      alignItems: 'center',
    },

    textField: {
      color: "white",
      borderColor: "red"
    },

    bottomButton: {
      margin: responsiveHeight(1,5),
      padding: responsiveWidth(3),
      alignItems:"center",      
      backgroundColor: '#42f492' 
    },

    buttonText: {
      alignItems: 'center',
      fontSize: responsiveFontSize(2.5), 
    }

});

module.exports = styles;