import { StyleSheet, Dimensions } from 'react-native';

import Color from 'constants/colors';

const { width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    backgroundColor: Color.background,
    padding: 20,
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
