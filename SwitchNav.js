import React, {Component, useState} from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Logo from './assets/Group_1_copy.png'
import Firebase from './components/firebase.js'
import {LinearGradient} from 'expo-linear-gradient'

import Login from './screens/Login'
import Signup from './screens/Signup'
import HomeScreen from './screens/HomeScreen'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
var username = ''
var email = ''
var password = ''

const AppNavigator = createSwitchNavigator({
    Login: {
      screen: Login
    },
    Signup:{
      screen: Signup
    },
    HomeScreen:{
      screen: HomeScreen
    },
  })


  
  export default createAppContainer(AppNavigator);