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
import ACTTestLocator from './screens/ACTTestLoc'
import Map from './screens/Map'
import SATTestLocator from './screens/SATTestLoc'
import TestingResources from './screens/TestingResources';
import PracTest from './screens/PracTests';

import One from './screens/One';
import Two from './screens/Two';
import Three from './screens/Three';
import Four from './screens/Four';

import ACTTestLocMAIN from './screens/ACTTestLocMAIN';
import SATTestLocMAIN from './screens/SATTestLocMAIN';
import ACTCustom from './screens/ACTCustom'

import Wellness from'./screens/wellness';
import Scholarships from './screens/Scholarships'
import College from'./screens/colegio'


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
var username = ''
var email = ''
var password = ''

const AppNavigator = createSwitchNavigator({
  HomeScreen:{
    screen: HomeScreen
  },
  Login: {
    screen: Login
  },

  One: {
    screen: One
  },

  Two: {
    screen: Two
  },

  Three:{
    screen: Three
  },

  Four: {
    screen: Four
  },


  Signup:{
    screen: Signup
  },
  Scholarships: {
    screen: Scholarships
  },

  TestingResources: {
    screen:TestingResources
  },

  ACTTestLocMAIN: {
    screen: ACTTestLocMAIN
  },

  SATTestLocMAIN: {
    screen: SATTestLocMAIN
  },


  ACTCustom:{
    screen: ACTCustom
  },

  ACTTestLoc: {
    screen: ACTTestLocator
  },
  SATTestLoc: {
    screen: SATTestLocator
  },

  PracTests: {
    screen: PracTest
  },


  Profile: {
    screen: ProfileScreen
},


Settings:{
  screen: Settings
},
Wellness:{
  screen:Wellness
},
College:{
  screen:College
},




  })



  export default createAppContainer(AppNavigator);
