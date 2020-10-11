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
var username = ''
var email = ''
var password = ''

export default class Login extends React.Component{
  state = {
    password: '',
    loading: false,
    username:''
  }
    constructor(props) {
      super(props);
      this.state = {
      loading: false,
      camera: false,
      aight: null,
      okman: null
      };
    }

    async componentDidMount() {

        await Font.loadAsync({
          'Baloobb': require('../assets/fonts/BalooTammudu2-Medium.ttf'),
        });
      }


    render(){


    async function  getRoll(){  // Camera Permission
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ aight: status === 'granted' && hi });
      }
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
             <Image style={{height:height*0.3,width:width*0.6,top:"-7%"}} source={require('../assets/mainlogo2.png')}/>
             <Text style={{ color: '#0300A3', fontSize:60, textAlign: 'center', top:height*-0.07,  fontFamily: 'Menlo' }}>Scholarly</Text>

             <View style={styles.inputView} >

                         <TextInput
                           style={{ fontSize: 20, height: '100%', marginLeft: '5%', fontFamily: 'Menlo' }}
                           autoCapitalize='none'
                           autoCompleteType='off'
                           placeholder="Email"
                           placeholderTextColor="black"
                           keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'}
                           onChangeText={(value) => this.setState({ username
: value })}
                           value={this.state.username
}

                         />
                              </View>
                         <View style={styles.inputView} >

                         <TextInput
                                             secureTextEntry={true}

                           style={{ fontSize: 10 * rem, width: '95%', height: '100%', marginLeft: '5%', fontFamily: 'Menlo' }}
                           autoCapitalize='none'
                           autoCompleteType='off'
                           placeholder="Password"
                           placeholderTextColor="#4F4F4F"
                           //keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'}
                           onChangeText={(value) => this.setState({ password: value })}
                           value={this.state.password}/>
                           </View>

                             <TouchableOpacity style={{  width:width*0.69,
                                 backgroundColor:"white",
                                 borderRadius:25,
                                 height:height*0.09,
                                 alignItems:"center",
                                 justifyContent:"center",
                                 top:"10%"
                                           }}
                                           onPress = { () =>  Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error){alert("There has been an issue logging in. Please check that all details were entered correctly. ") })} >

                                </TouchableOpacity>
                                <Text style={{ color: '#0300A3', fontSize:50, textAlign: 'center', top:"2%",  fontFamily: 'Menlo' }}>Login</Text>

                                               <Text style={{color: 'white', fontSize:15,fontFamily:'Menlo',top:"-15%", textShadowColor:'black', textShadowRadius:10, textShadowOffset:{width: -1, height: 1}}}
                                               onPress={() =>navigate('Signup')}> Sign up</Text>


                                                              <Text style={{color: 'white', fontSize:15,fontFamily:'Menlo',top:"-13%", textShadowColor:'black', textShadowRadius:10, textShadowOffset:{width: -1, height: 1}}}
                                                              onPress={() =>navigate('Signup')}>Forgot your password?</Text>


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
  width:width*0.69,
    backgroundColor:"white",
    borderRadius:25,
    height:height*0.09,
    alignItems:"center",
    justifyContent:"center",
    top:height*0.09
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:height*0.068,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  }
  });
