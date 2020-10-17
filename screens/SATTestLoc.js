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

export default function SATTestLoc ({ navigation }){

  const webviewRef = useRef(null)

  const navTR = () => {
    navigation.navigate('TestingResources')
  }

  const printSumthin = () => {
      console.log("hello");
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
          <TouchableOpacity onPress={console.log("NONO")}>
            <View style ={{marginTop: 3, marginLeft:width*0.3}}>
                <AntDesign name='find' size ={25} color='white'/>
            </View>
          </TouchableOpacity>
        </View>
        <WebView
          source={{ uri: 'https://collegereadiness.collegeboard.org/sat/register/find-test-centers' }}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color='black'
              size='large'
              style={{marginBottom:height*0.5}}
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