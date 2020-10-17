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
    const {navigate} = this.props.navigation;

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
           <View style={{ flex: 3, width: '90%' }}>
                         <View style={{ width: '100%', flex: 1, flexDirection: 'row' }}>
                           <View style={{
                             flex: 1, height: '85%',
                           }}>
                             <TouchableOpacity style={{
                               shadowOffset: {
                                 width: 0,
                                 height: 4,
                               },
                               shadowOpacity: 0.30,
                               shadowRadius: 3.65,

                               elevation: 8,
                             }} onPress={() =>navigate('TestingResources')}>
                               <View
                                 style={{ height: '75%', alignItems: 'center', borderRadius: 20, width: '100%', justifyContent: 'center', backgroundColor: '#3773BB',top:height*0.23 }}>
                                 <View style={{ flex: 0.2, width: '100%' }}></View>
                                 <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                   <Text style={{ fontWeight: 'bold', fontSize: Math.min(12.5 * rem, 22.5 * wid), color: 'white' }}>Testing</Text>
                                 </View>
                                 <View style={{ flex: 3, width: '100%' }}>
                                   <Image style={{ width: '100%', height: '100%' }} source={require('../assets/download-3.png')} resizeMode='contain'></Image>
                                 </View>
                                 <View style={{ flex: 1, width: '100%' }}></View>
                               </View>
                             </TouchableOpacity>
                           </View>
                           <View style={{ flex: 0.15, height: '95%' }}></View>
                           <View style={{
                             flex: 1, height: '85%',
                           }}>
                             <TouchableOpacity style={{
                               shadowOffset: {
                                 width: 0,
                                 height: 4,
                               },
                               shadowOpacity: 0.30,
                               shadowRadius: 3.65,

                               elevation: 8,
                             }} onPress={() => this.props.navigation.navigate('Scholarships')}>
                               <View
                                 style={{ height: '75%', alignItems: 'center', borderRadius: 20, width: '100%', justifyContent: 'center', backgroundColor: '#B22234',top:height*0.23 }}>
                                 <View style={{ flex: 0.2, width: '100%' }}></View>
                                 <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                   <Text onPress={() => this.props.navigation.navigate('Chat')} style={{ fontWeight: 'bold', fontSize: Math.min(12.5 * rem, 22.5 * wid), color: 'white' }}>Scholarships</Text>
                                 </View>
                                 <View style={{ flex: 3, width: '100%' }}>
                                   <Image style={{ width: '100%', height: '100%' }} source={require('../assets/scholar.png')} resizeMode='contain'></Image>
                                 </View>
                                 <View style={{ flex: 1, width: '100%' }}></View>
                               </View>
                             </TouchableOpacity>
                           </View>
                         </View>
                         <View style={{ flex: 0.05 }}></View>
                         <View style={{ width: '100%', flex: 1, flexDirection: 'row' }}>
                           <View style={{
                             flex: 1, height: '85%',
                           }}>
                             <TouchableOpacity style={{
                               shadowOffset: {
                                 width: 0,
                                 height: 4,
                               },
                               shadowOpacity: 0.30,
                               shadowRadius: 3.65,

                               elevation: 8,
                             }} onPress={() =>navigate('Wellness')}>
                               <View
                                 style={{ height: '75%', alignItems: 'center', borderRadius: 20, width: '100%', justifyContent: 'center', backgroundColor: '#B22234',top:height*0.12 }}>
                                 <View style={{ flex: 0.2, width: '100%' }}></View>
                                 <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                   <Text style={{ fontWeight: 'bold', fontSize: Math.min(12.5 * rem, 22.5 * wid), color: 'white' }}>Wellness</Text>
                                 </View>
                                 <View style={{ flex: 3, width: '100%' }}>
                                   <Image style={{ width: '100%', height: '100%' }} source={require('../assets/mental.png')} resizeMode='contain'></Image>
                                 </View>
                                 <View style={{ flex: 1, width: '100%' }}></View>
                               </View>
                             </TouchableOpacity>
                           </View>
                           <View style={{ flex: 0.15, height: '95%' }}></View>
                           <View style={{
                             flex: 1, height: '85%',
                           }}>
                             <TouchableOpacity style={{
                               shadowOffset: {
                                 width: 0,
                                 height: 4,
                               },
                               shadowOpacity: 0.30,
                               shadowRadius: 3.65,

                               elevation: 8,
                             }} onPress={() => this.props.navigation.navigate('College')}>

                               <View
                                 style={{ height: '75%', alignItems: 'center', borderRadius: 20, width: '100%', justifyContent: 'center', backgroundColor: '#3773BB',top:height*0.12  }}>
                                 <View style={{ flex: 0.2, width: '100%' }}></View>
                                 <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                   <Text style={{ fontWeight: 'bold', fontSize: Math.min(12.5 * rem, 22.5 * wid), color: 'white' }}>College</Text>
                                 </View>
                                 <View style={{ flex: 3, width: '100%' }}>
                                   <Image style={{ width: '100%', height: '100%' }} source={require('../assets/cole.png')} resizeMode='contain'></Image>
                                 </View>
                                 <View style={{ flex: 1, width: '100%' }}></View>
                               </View>
                             </TouchableOpacity>
                           </View>
                         </View>

                         <View style={{ flex: 0.1, width: '100%' }}>

                         </View>
                       </View>
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
