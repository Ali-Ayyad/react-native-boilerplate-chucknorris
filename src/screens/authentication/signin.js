import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Color from 'constants/colors';
import style from 'styles/signin';

import { FormLabel, FormInput, Button } from 'react-native-elements';

const USERNAME = 'Username';
const PASSWORD = 'Password';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  signIn() {
    let { screenProps: { signIn } } = this.props;
    signIn();
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.subContainer}>
          <View style={style.welcomeContainer}>
            <Text style={style.title}>Welcome To React Native and Chuck Norris Boilerplate!</Text>
          </View>
          <View style={style.formContainer}>
            <FormLabel labelStyle={style.formLabel}>{USERNAME}</FormLabel>
            <FormInput
              onChangeText={value => {
                this.setState({ username: value });
              }}
            />

            <FormLabel labelStyle={style.formLabel}>{PASSWORD}</FormLabel>
            <FormInput
              onChangeText={value => {
                this.setState({ password: value });
              }}
            />
          </View>
        </View>
        <Button
          title={'Lets Start!'}
          borderRadius={5}
          backgroundColor={Color.blue}
          textStyle={{ fontWeight: 'bold' }}
          onPress={() => {
            this.signIn();
          }}
        />
      </View>
    );
  }
}
