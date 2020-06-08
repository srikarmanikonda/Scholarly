import React, {Component, useState, useEffect} from 'react';
import { View, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView, Share } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {LinearGradient} from 'expo-linear-gradient'
import { Camera } from 'expo-camera'
import Logo from '../assets/Group_1_copy.png'
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import { Button, Image, ListItem } from 'react-native-elements'

import { AntDesign, FontAwesome, EvilIcons, Octicons, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
console.disableYellowBox = true;
var name = 'Andrew Tikhonov'


export default function Settings({ navigation }) {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Hey! You should join this new app called Unity. It provides helpful information regarding COVID-19 and helps make a difference in the community!',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            console.log("dismissed")
          }
        } catch (error) {
          alert(error.message);
        }
      };

  const navBack = () => {
    navigation.navigate('Profile')
  }
  const list = [
    {
      title: 'Invite Friends',
      icon: 'users',
      icontype: 'feather'
    },
    {
        title: 'Reset Email',
        icon: 'email',
        icontype: 'fontawesome'
    },
    {
      title: 'Reset Password',
      icon: 'textbox-password',
      icontype: 'material-community'
    },

    {
        title: 'Sign Out',
        icon: 'log-out',
        icontype: 'entypo'
    },
  ]
  
  return (

    <View>
        <StatusBar hidden/>
        
        <View style={{marginTop:'0%'}}>

        </View>
    {
      list.map((item, i) => (
        <ListItem
        onPress = {()=> console.log("OK")}
          key={i}
          title={item.title}
          leftIcon={{ name: item.icon, type: item.icontype}}
          bottomDivider
          chevron onPress ={()=>{
              if (item.title=='Invite Friends'){
                  console.log("Modern")
                  onShare();
              }
              if (item.title=='Reset Email'){
                console.log("reset email")
            }
            if (item.title=='Reset Password'){
                console.log("reset password")
            }
            if (item.title=='Sign Out'){
                console.log("sign out pressed")
            }
          }}
        />
      ))
    }
    <View style={{marginTop:'3%', marginLeft:'3%'}}>
        <TouchableOpacity onPress={navBack} style={{width:width*0.5}}>
            <View style={{borderRadius: 8, paddingVertical: 10, paddingHorizontal: 10,backgroundColor: '#ddd',}}>
            <FontAwesome name = 'long-arrow-left' size={30} style ={{marginTop: '-2%', marginLeft: '0%', color: '#777'}}/>
                <Text style={{color: 'black',fontSize: 16,textAlign: 'center', marginTop:'-17%', marginLeft:'20%'}}>
                    Back to Profile
                </Text>
            </View>
        </TouchableOpacity>
    </View>
  </View>
  );
}