import { StyleSheet, Dimensions } from 'react-native';

import Color from 'constants/colors';

const { width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 10,
    flexGrow: 1
  },
  jokeContainer: {
    margin: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.white,
    padding: 10
  },
  joke: {
    color: Color.main,
    fontSize: 20,
    textAlign: 'center'
  }
});
