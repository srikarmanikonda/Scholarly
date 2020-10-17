import React, {Component, useState, useRef, useEffect} from 'react';
import { View, StatusBar, StyleSheet, ActivityIndicator, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView, Share, Alert } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {LinearGradient} from 'expo-linear-gradient'
import { Camera } from 'expo-camera'
import Logo from '../assets/Group_1_copy.png'
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import { Button, Image, ListItem } from 'react-native-elements'
import email from 'react-native-email'
import { WebView } from 'react-native-webview';
import { AntDesign,FontAwesome, Octicons, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const data = require('../ACTdata.json')

// const returnDatesForLoc = () => {
//   var locationInMaps = "Libertyville High School"
//   var returnedStatement=''
//   for (var i=0; i<data.length; i++){
//     if ((data[i].schoolName)!=null){
//       if ((data[i].schoolName).indexOf(locationInMaps)!=-1){
//         if(returnedStatement==''){
//           returnedStatement=data[i].dates;
//         } else {
//           returnedStatement+=", "+data[i].dates;
//         }
//       }
//     }
//   }
//   console.log(returnedStatement)
// }

export default function ACTTestLoc ({ navigation }){

  const webviewRef = useRef(null)

  const navTR = () => {
    navigation.navigate('ACTTestLocMAIN')
  }

    return(
    
      <SafeAreaView style={{flex:1}}>
          <StatusBar hidden/>
          <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={navTR}>
            <View style ={{marginTop: 3, marginRight:width*0.35}}>
                <AntDesign name='arrowleft' size ={25} color='white'/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={console.log("HELLO")}>
            <View style ={{marginTop: 3, marginLeft:width*0.3}}>
                <AntDesign name='find' size ={25} color='white'/>
            </View>
          </TouchableOpacity>
        </View>
        <WebView
          source={{ uri: 'https://www.act.org/content/act/en/products-and-services/the-act/registration/test-center-locator.html' }}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color='black'
              size='large'
              style={{marginBottom: height*0.5}} //make this align/justify center
            />
          )}
          ref={webviewRef}
        />
      </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  tabBarContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#337cd1'
  },
  button: {
    color: 'white',
    fontSize: 24
  }
})

/* <TouchableOpacity
             style = {{width:width*0.8,
                backgroundColor:"maroon",
                borderRadius:25,
                height:height*0.09,
                alignItems:"center",
                justifyContent:"center",
                top:height*0.09
              }}
             onPress = {handleEmailSAT}
             >
             </TouchableOpacity>

             const handleEmailSAT = () => {
        const to = ['andrewtikhonov04@gmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: [], // string or array of email addresses
            bcc: '', // string or array of email addresses
            subject: 'SAT Practice Test',
            body: 'Some body right here'
        }).catch(console.error)

             */