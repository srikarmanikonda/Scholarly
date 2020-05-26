import React from 'react';
import login from './components/Login.js'
import signed from './components/Signup.js'
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const AppNavigator = createStackNavigator({
        Login: {
          screen: log
        },

        Signup: {
          screen:signed
        }
      })


const AppContainer = createAppContainer(AppNavigator);
      return(
      <AppContainer/>
      );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
