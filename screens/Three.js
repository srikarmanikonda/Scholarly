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


export default function Three ({ navigation }){

  const webviewRef = useRef(null)

  const navBack = () => {
    navigation.navigate('Wellness')
  }

    return(
    
      <SafeAreaView style={{flex:1}}>
          <StatusBar hidden/>
          <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={navBack}>
            <View style ={{marginTop: 3, marginRight:width*0.45}}>
                <AntDesign name='arrowleft' size ={25} color='white'/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={console.log("HELLO")}>
            <View style ={{marginTop: 3, marginLeft:width*0.3}}>
                <AntDesign name='find' size ={0} color='white'/>
            </View>
          </TouchableOpacity>
        </View>
        <WebView
          source={{ uri: 'https://www.nhlbi.nih.gov/health/educational/wecan/get-active/activity-plan.htm' }}
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