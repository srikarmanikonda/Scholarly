import React, {Component, useState} from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Firebase from '../components/firebase.js'
import {LinearGradient} from 'expo-linear-gradient'
import Logo from '../assets/mainlogo2.png'

import { AntDesign,FontAwesome, Octicons, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';
import * as Font from 'expo-font';

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

    _loadFontsAsync = async () => {
      let isLoaded = await Font.loadAsync({
        FontBes: require("../assets/fonts/Commissioner-Thin.ttf"),
        FontBes2: require("../assets/fonts/Commissioner-Light.ttf")
      });
      this.setState({ loaded: true });
    };
  
    componentDidMount() {
      this._loadFontsAsync();
    }


    render(){
      usernames = this.state.name
      emails = this.state.email
      passwords = this.state.password
      const {navigate} = this.props.navigation;

      if (!this.state.loaded) {
        return (
        <View>
          <StatusBar hidden />
        </View>)
      }
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


<TouchableOpacity onPress={()=>navigate('Login')} style={{marginRight:width*0.7, marginBottom:height*-0.06}}>
  <AntDesign name='arrowleft' size={30} color='white'/>
</TouchableOpacity>

             <Image source ={Logo}
             style = {{height:height*0.15,width:width*0.3,top:"-3%",
  }}/>
<View style = {{  width:"80%",
  backgroundColor:"white",
  borderRadius:25,
  height:height*0.068,
  marginBottom:20,
      top:-0.04*height,
  justifyContent:"center", marginTop:height*0.1,
  padding:20}}>
                <TextInput
                  style={{  fontSize: 15, fontFamily:'FontBes', height: '300%', marginLeft: '3%', }}
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
    marginTop:height*0.01,
    justifyContent:"center",
    padding:20}}>
      <StatusBar hidden/>
              <TextInput
                style={{ fontSize: 15, fontFamily:'FontBes', height: '300%', marginLeft: '3%',}}
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
    marginTop:height*0.01,
  marginBottom:20,
  justifyContent:"center",
  padding:20}}>

                <TextInput
                  style={{  fontSize: 15, fontFamily:'FontBes', height: '300%', marginLeft: '3%',  }}
                  autoCapitalize='none'
                  autoCompleteType='off'
                  placeholderTextColor = 'black'
                  placeholder="Password"
                  onChangeText={(value) => this.setState({ password: value })}
                  value={this.state.password}
                  secureTextEntry={true}

                />
                </View>

                <TouchableOpacity style={styles.button} onPress = { () =>  Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error){alert("There has been an issue logging in. Please check that all details were entered correctly. ") })} >
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:20, fontFamily:'FontBes2', marginHorizontal:width*0.01, textAlign:'center'}}>Sign Up</Text>
                </View>
            </TouchableOpacity>
  {/* <TouchableOpacity
  
  style = {styles.login} >

  </TouchableOpacity>
  <Text style =  {{  marginTop:'11.2%',
  fontSize:40,
  color:"black",
  top:height*-0.02

  }}
  onPress ={()=>navigate("Login")}

  > Sign Up </Text> */}

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
      button: {
        width:width*0.8,
    backgroundColor:'#226bc0',
    borderRadius:25,
    height:height*0.07,
    alignItems:"center",
    justifyContent:"center",
    marginBottom: height*-0.00,
    marginTop:height*0.1
    }
      });


      /*
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
*/