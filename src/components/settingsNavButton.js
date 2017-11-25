import React from 'react';

import { TouchableOpacity, StyleSheet } from 'react-native';

import Color from 'constants/colors';
import { Icon } from 'react-native-elements';

export default ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Icon name="settings" size={25} color={Color.white} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
