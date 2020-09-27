import React, {Component, useState} from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Firebase from '../components/firebase.js'
import {LinearGradient} from 'expo-linear-gradient'
import Logo from '../assets/mainlogo2.png'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
global.usernames = ''
 global.emails = ''
 global.passwords = ''
global.activitynum = 0
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
      usernames = this.state.name
      emails = this.state.email
      passwords = this.state.password
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


             <Image source ={Logo}
             style = {{height:height*0.3,width:width*0.6,top:"-3%",
  }}/>
<View style = {{  width:"80%",
  backgroundColor:"white",
  borderRadius:25,
  height:height*0.068,
  marginBottom:20,
      top:0.06*height,
  justifyContent:"center",
  padding:20}}>
                <TextInput
                  style={{  fontSize: 20, height: '100%', marginLeft: '5%', fontFamily: 'Menlo'}}
                    autoCapitalize='none'
                    placeholderTextColor = 'black'
                    autoCompleteType='off'
                    placeholder="Name"
                    keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'}
                    onChangeText={(value) => this.setState({ name: value })}
                    value={this.state.name}/>
</View>

  <View style = {{  width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:height*0.068,
    marginBottom:height*0.064,
    top:0.12*height,
    justifyContent:"center",
    padding:20}}>
              <TextInput
                style={{ }}
                  autoCapitalize='none'
                  placeholderTextColor = 'black'
                  autoCompleteType='off'
                  placeholder="Email"
                  keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'}
                  onChangeText={(value) => this.setState({ email: value })}
                  value={this.state.email}

                />
</View>
<View style = {{  width:"80%",
  backgroundColor:"white",
  borderRadius:25,
  height:height*0.068,
      top:0.14*height,
  marginBottom:20,
  justifyContent:"center",
  padding:20}}>

                <TextInput
                  style={{  fontSize: 20, height: '100%', marginLeft: '5%', fontFamily: 'Menlo' }}
                  autoCapitalize='none'
                  autoCompleteType='off'
                  placeholderTextColor = 'black'
                  placeholder="Password"
                  onChangeText={(value) => this.setState({ password: value })}
                  value={this.state.password}
                  secureTextEntry={true}

                />
                </View>
  <TouchableOpacity
  onPress ={() =>
                 {Firebase.auth().createUserWithEmailAndPassword(this.state.emails,this.state.passwords).catch(function(error){alert("There has been an error in signing up your account. Please check all fields again carefully and try again",console.log(error))}).then(function () {

                   Firebase.database().ref('users/' + Firebase.auth().currentUser.uid).set({
                     username:usernam,
                     email: Firebase.auth().currentUser.email,
                     password :passwords,


                   })

                 }).then(Alert.alert("Thanks for signing up!"), ("Your account has been created and will be approved soon!")).then(navigate("Home"))
            }


        }
  onPress ={()=>  Firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(
                Firebase.database().ref('users/' + Firebase.auth().currentUser.uid).set({
                  name:usernames,
                  email: Firebase.auth().currentUser.email,
                  password:passwords
})
).then(navigate("HomeScreen"))
}
  style = {styles.login} >

  </TouchableOpacity>
  <Text style =  {{  marginTop:'11.2%',
  fontSize:40,
  color:"black",
  top:height*0.06

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
        backgroundColor:"white",
        borderRadius:25,
        height:height*0.09,
        alignItems:"center",
        justifyContent:"center",
        top:height*0.19
      },
      });
