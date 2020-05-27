import React, {Component, useState} from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {LinearGradient} from 'expo-linear-gradient'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class Login extends React.Component{
  constructor() {
    super();
    this.state = {
      username:'',
      password:'',
    }
  }
  static navigationOptions = {
    title: 'Login',
  }
  render(){
    const {navigate} = this.props.navigation;
  return (
      <View style={styles.container}>
      <LinearGradient
   colors = {['#cc2b5e','#753a88']}
   style={{
             position: 'absolute',
             left: 0,
             right: 0,
             top: 0,
             height:height,
           }}
           />
            <TextInput
              style={{ fontSize: 18, width: width*0.75, height: height*0.1, marginLeft: '5%', fontFamily: 'American Typewriter',borderColor: '#fff',
              borderWidth: 2,
              borderRadius: 20  }}
                autoCapitalize='none'
                placeholderTextColor = '#fff'
                autoCompleteType='off'
                placeholder="Username"
                keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'}
                onChangeText={(value) => this.setState({ username: value })}
                value={this.state.username}

              />

              <TextInput
                style={{ fontSize: 18, width:  width*0.75, height:  height*0.10, marginLeft: '5%', fontFamily: 'American Typewriter',borderColor: '#fff',
                borderWidth: 2,
                borderRadius: 20 }}
                autoCapitalize='none'
                autoCompleteType='off'
                placeholderTextColor = '#fff'
                placeholder="Password"
                onChangeText={(value) => this.setState({ password: value })}
                value={this.state.password}
                secureTextEntry={true}

              />

              <TouchableOpacity
              style = {styles.login} >
  </TouchableOpacity>


              </View>

  );
  }
  }




const AppNavigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
})

export default createAppContainer(AppNavigator);

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
  height:height*0.1,
  alignItems:"center",
  justifyContent:"center",
  top:height*0.09
},
});
