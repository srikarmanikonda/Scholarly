import React, {Component, useState} from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {LinearGradient} from 'expo-linear-gradient'
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as Font from 'expo-font'
import { Asset } from 'expo-asset';
import Firebase from '../components/firebase.js'


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const rem = height/380
const wid = width


export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
      <LinearGradient
   colors = {['#54C7E0','#3090D5','#337CD1','#00CEFC']}
   style={{
             position: 'absolute',
             left: 0,
             right: 0,
             top: 0,
             height:height,
           }}
           />

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
        });
