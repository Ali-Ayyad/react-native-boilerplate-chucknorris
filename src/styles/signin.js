import { StyleSheet, Dimensions } from 'react-native';

import Color from 'constants/colors';

const { width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
  welcomeContainer: {
    margin: 45
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.black,
    textAlign: 'center'
  },
  formContainer: {},
  formLabel: {
    color: Color.black
  }
});
