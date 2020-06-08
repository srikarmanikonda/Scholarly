import React, {Component, useState} from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Logo from './assets/Group_1_copy.png'
import Firebase from './components/firebase.js'
import {LinearGradient} from 'expo-linear-gradient'
import { Notifications } from 'expo';
import Login from './screens/Login'
import Signup from './screens/Signup'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/Profile'
import Settings from './screens/Settings'
import Map from './screens/Map'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
var username = ''
var email = ''
var password = ''

const AppNavigator = createSwitchNavigator({
  Profile: {
    screen: ProfileScreen
},
Settings:{
  screen: Settings
},
  HomeScreen:{
    screen: HomeScreen
  },

    Signup:{
      screen: Signup
    },
    Login: {
      screen: Login
    },
    
    
  })



  export default createAppContainer(AppNavigator);
