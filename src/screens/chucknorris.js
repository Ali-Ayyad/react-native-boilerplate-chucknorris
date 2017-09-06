import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  Image,
  StatusBar
} from 'react-native';

import style from 'styles/chucknorris';
import Color from 'constants/colors';
import APIs from 'network/api';

import { Button } from 'react-native-elements';

export default class ChuckNorris extends Component {

  constructor(){
    super();
    this.state = {
      joke:''
    }
  }
  static navigationOptions = ({ navigation:{navigate} }) => ({
    title:'Chuck Norris Jokes',
    headerMode:'screen',
    headerTintColor:Color.white,
    headerStyle:{
      backgroundColor:Color.main
    }
  });

  componentWillMount(){
    this.getJoke()
  }

  getJoke(){
    this.setState({loading:true} , () => {
      APIs.getRandomJoke().then((res) => {
        if(!res) {
          alert('check internet connection');
          this.setState({loading:false})
          return
        }
        console.log(res);
        this.setState({
          joke:res.value
        })
        this.setState({loading:false})
      })
    })
  }

  renderJoke(){
    let { loading, joke } = this.state;
    if(!loading){
      return (
        <View style={style.jokeContainer}>
          <Text style={style.joke}>{joke}</Text>
        </View>
      )
    }
    return (
      //inline-style
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size={'large'} animating={loading}/>
      </View>
    )
  }

  renderLogo(){
    return(
      <View style={{alignItems:'center'}}>
        <Image
          style={{resizeMode:'contain', height:200 ,width:300}}
          resizeMethod={'auto'}
          source={{uri:'https://assets.chucknorris.host/img/chucknorris_logo_coloured_small.png'}}/>
      </View>
    )
  }

  render() {

    return (
      <ScrollView contentContainerStyle={[style.container]}>
        <StatusBar barStyle="light-content"/>
        {this.renderLogo()}
        {this.renderJoke()}
        <Button
          title={'Tell me more!'}
          borderRadius={5}
          backgroundColor={Color.blue}
          textStyle={{fontWeight:'bold'}}
          onPress={() => this.getJoke()}
        />
      </ScrollView>
    );
  }
}
