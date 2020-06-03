import React, {Component, useState} from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Logo from './assets/Group_1_copy.png'
import Firebase from './components/firebase.js'
import {LinearGradient} from 'expo-linear-gradient'
import * as Permissions from 'expo-permissions';

import Nav from './SwitchNav'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
var username = ''
var email = ''
var password = ''


export default function App(){
  return(
    <Nav/>
  )
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
