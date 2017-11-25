import React, { Component } from 'react';
import { View, Image, Text, AsyncStorage, StatusBar } from 'react-native';

import Color from 'constants/colors';

import { TabNavigator, StackNavigator } from 'react-navigation';

import SignIn from 'auth/signin';
import Home from 'screens/home';
import Settings from 'screens/settings';
import ChuckNorris from 'screens/chucknorris';

import { Icon } from 'react-native-elements';

console.ignoredYellowBox = ['Warning: BackAndroid'];

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    Text.defaultProps.allowFontScaling = false;
  }

  componentWillMount() {
    this.checkIfSignedIn();
  }

  changeLoggedInStatus() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  checkIfSignedIn() {
    window.RNB_user = {};
    AsyncStorage.getItem('user_info')
      .then(res => {
        if (res) {
          var user = JSON.parse(res);
          window.RNB_user = {
            ...user,
            token: user.auth_token
          };
          this.setState({ isLoggedIn: true });
        }
      })
      .done();
  }

  renderContent() {
    const MainNavigation = TabNavigator(
      {
        firstTab: {
          screen: StackNavigator({
            scanner: { screen: ChuckNorris }
          }),
          navigationOptions: ({ navigation, screenProps }) => {
            return {
              tabBarLabel: 'Chuck Norris',
              tabBarIcon: ({ focused, tintColor }) => (
                <Icon
                  name="beer"
                  type={'font-awesome'}
                  size={30}
                  color={!focused ? Color.darkBlue : 'white'}
                />
              )
            };
          }
        },
        secondTab: {
          screen: StackNavigator({
            home: { screen: Home },
            settings: { screen: Settings }
          }),
          navigationOptions: ({ navigation, screenProps }) => {
            return {
              tabBarLabel: 'Home',
              tabBarIcon: ({ focused, tintColor }) => (
                <Icon
                  name="glass"
                  type={'font-awesome'}
                  size={25}
                  color={!focused ? Color.darkBlue : 'white'}
                />
              )
            };
          }
        }
      },
      {
        tabBarOptions: {
          inactiveTintColor: Color.darkBlue,
          activeTintColor: 'white',
          style: {
            height: 55,
            backgroundColor: Color.main
          }
        }
      }
    );

    const Authentication = StackNavigator(
      {
        signin: { screen: SignIn }
      },
      { headerMode: 'none' }
    );

    if (this.state.isLoggedIn) {
      return <MainNavigation screenProps={{ signOut: this.changeLoggedInStatus.bind(this) }} />;
    }
    return <Authentication screenProps={{ signIn: this.changeLoggedInStatus.bind(this) }} />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        {this.renderContent()}
      </View>
    );
  }
}
