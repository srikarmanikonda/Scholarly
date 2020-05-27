import React, {Component, useState} from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Firebase from '../components/firebase.js'
import {LinearGradient} from 'expo-linear-gradient'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
var username = ''
var email = ''
var password = ''

export default class Signup extends React.Component{
    constructor() {
      super();
      this.state = {
        name:'',
        email:'',
        password:'',

      }
    }
    static navigationOptions = {
      title: 'Signup',
    }


    render(){
      username = this.state.name
      email = this.state.email
      password = this.state.password
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


             <Image source ={Logo}
             style = {{   height:210,
    width:230,
    position:'absolute',
    top: "4%",
  }}/>

                <TextInput
                  style={{ fontSize: 18.0000, width: width*0.75, height: height*0.08, marginLeft: '5%', fontFamily: 'American Typewriter',borderColor: '#fff',
                  borderWidth: 2,
                  borderRadius: 20,marginVertical:"10%",top:"11%" }}
                    autoCapitalize='none'
                    placeholderTextColor = '#fff'
                    autoCompleteType='off'
                    placeholder="Name"
                    keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'}
                    onChangeText={(value) => this.setState({ name: value })}
                    value={this.state.name}/>


              <TextInput
                style={{ fontSize: 18.0000, width: width*0.75, height: height*0.08, marginLeft: '5%', fontFamily: 'American Typewriter',borderColor: '#fff',
                borderWidth: 2,
                borderRadius: 20,marginVertical:"10%",top:"11%" }}
                  autoCapitalize='none'
                  placeholderTextColor = '#fff'
                  autoCompleteType='off'
                  placeholder="Email"
                  keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'}
                  onChangeText={(value) => this.setState({ email: value })}
                  value={this.state.email}

                />

                <TextInput
                  style={{ fontSize: 18.0000, width:  width*0.75, height:  height*0.08, marginLeft: '5%', fontFamily: 'American Typewriter',borderColor: '#fff',
                  borderWidth: 2,
                  borderRadius: 20,marginVertical:"10%",top:"9%" }}
                  autoCapitalize='none'
                  autoCompleteType='off'
                  placeholderTextColor = '#fff'
                  placeholder="Password"
                  onChangeText={(value) => this.setState({ password: value })}
                  value={this.state.password}
                  secureTextEntry={true}

                />
  <TouchableOpacity
  onPress ={()=>  Firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(
                Firebase.database().ref('users/' + Firebase.auth().currentUser.uid).set({
                  name:username,
                  email: Firebase.auth().currentUser.email,
                  password:password
})
).then( Firebase.auth().signOut()).then(navigate("Login"))
}
  style = {styles.login} >

  </TouchableOpacity>
  <Text style =  {{  marginTop:'1.2%',
  fontSize:40,
  color:"white",
  fontFamily:'Arial'
  }}
  onPress ={()=>navigate("Login")}

  > Sign Up </Text>

                </View>

    );
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