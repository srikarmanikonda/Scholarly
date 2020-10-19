import React, {Component, useState} from 'react';
import { View, StyleSheet, StatusBar,Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
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


    async function  getRoll(){  // Camera Permission
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ aight: status === 'granted' && hi });
      }
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
             <Image style={{height:height*0.15,width:width*0.3,top:"-7%"}} source={require('../assets/mainlogo2.png')}/>
             <Text style={{ color: '#fff', fontSize:60, textAlign: 'center', top:height*-0.07,  fontFamily:'FontBes'}}>Scholarly</Text>

             <View style={styles.inputView} >
<StatusBar hidden/>
                         <TextInput
                           style={{ fontSize: 15, fontFamily:'FontBes', height: '300%', marginLeft: '3%',  }}
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

                           style={{ fontSize: 15, fontFamily:'FontBes',width: '95%', height: '300%', marginLeft: '3%',  }}
                           autoCapitalize='none'
                           autoCompleteType='off'
                           placeholder="Password"
                           placeholderTextColor="black"
                           //keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'}
                           onChangeText={(value) => this.setState({ password: value })}
                           value={this.state.password}/>
                           </View>

                             
                                

                                               <Text style={{color: 'white', fontFamily:'FontBes2' ,textDecorationLine:'underline', fontSize:15,top:"3.5%", textShadowRadius:10, textShadowOffset:{width: -1, height: 1}}}
                                               onPress={() =>navigate('Signup')}>Sign up</Text>


                                                              <Text style={{color: 'white', fontFamily:'FontBes2', fontSize:15,top:"3.5%",textDecorationLine:'underline',   textShadowOffset:{width: -1, height: 1}}}
                                                              onPress={() =>navigate('Signup')}>Forgot your password?</Text>

{/* <TouchableOpacity style={{  width:width*0.69,
                                 backgroundColor:"white",
                                 borderRadius:25,
                                 height:height*0.09,
                                 alignItems:"center",
                                 justifyContent:"center",
                                 top:"10%"
                                           }}
                                           >

                                </TouchableOpacity> */}


<TouchableOpacity style={styles.button} onPress = { () =>  Firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).catch(function(error){alert("There has been an issue logging in. Please check that all details were entered correctly. ") })} >
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:20, fontFamily:'FontBes2', marginHorizontal:width*0.01, textAlign:'center'}}>Log In</Text>
                </View>
            </TouchableOpacity>
</View>
)
}
}

//



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
  },
  button: {
    width:width*0.8,
backgroundColor:'#226bc0',
borderRadius:25,
height:height*0.07,
alignItems:"center",
justifyContent:"center",
marginBottom: height*-0.00,
marginTop:height*0.11
}
  });
