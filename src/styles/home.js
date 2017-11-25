import { StyleSheet, Dimensions } from 'react-native';

import Color from 'constants/colors';

const { width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    backgroundColor: Color.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.main,
    textAlign: 'center'
  }
});
