import React, {Component, useState, useRef, useEffect} from 'react';
import { View, StatusBar, StyleSheet, ActivityIndicator, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView, Share } from 'react-native';
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

export default function TestLoc ({ navigation }){

  const webviewRef = useRef(null)

  const navTR = () => {
    navigation.navigate('TestingResources')
  }

    return(
    
      <SafeAreaView style={{flex:1}}>
          <StatusBar hidden/>
          <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={navTR}>
            <View style ={{marginTop: 3, marginRight:75}}>
                <AntDesign name='arrowleft' size ={25} color='white'/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={console.log("NONO")}>
            <View style ={{marginTop: 3, marginLeft:75}}>
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
              style={styles.flexContainer}
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
    justifyContent: 'space-around',
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