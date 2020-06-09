import React, {Component, useState} from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {LinearGradient} from 'expo-linear-gradient'
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
var username = ''
var email = ''
var password = ''

export default class HomeScreen extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
      loading: false,
      camera: false,
      aight: null,
      okman: null
      };
    }
    static navigationOptions = {
      title: 'HomeScreen',
    }


    render(){

    console.log(result);

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
             <TouchableOpacity
             style = {styles.login}
             onPress = {()=> navigate('Profile')}
             >
             </TouchableOpacity>

</View>
)
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
