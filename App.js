import React, {Component, useState} from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Logo from './assets/Group_1_copy.png'
import { AppLoading } from 'expo';
import Firebase from './components/firebase.js'
import {LinearGradient} from 'expo-linear-gradient'
import * as Permissions from 'expo-permissions';
import * as Font from 'expo-font';
import Nav from './SwitchNav'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
var username = ''
var email = ''
var password = ''


export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync({
      'Nova': require('./assets/fonts/NovaMono.ttf'),
      'WSR': require('./assets/fonts/WorkSans-Regular.ttf'),
      'WSB': require('./assets/fonts/WorkSans-SemiBold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    if (this.state.fontsLoaded) {
      return <Nav />;
    }
    else
    {
      console.log("THE FONT WONT LOAD IN");
      return <AppLoading />;
    }
    
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login:{
width:width*0.8,
  backgroundColor:"maroon",
  borderRadius:25,
  height:height*0.09,
  alignItems:"center",
  justifyContent:"center",
  top:height*0.09
},
});
