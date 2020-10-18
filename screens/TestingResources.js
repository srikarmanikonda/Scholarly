import React, {Component, useState, useEffect} from 'react';
import { View, StatusBar, Linking, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView, Alert, Share } from 'react-native';
import { createAppContainer, createSwitchNavigator, NavigationEvents } from 'react-navigation';
import {LinearGradient} from 'expo-linear-gradient'
import { Camera } from 'expo-camera'
import Logo from '../assets/Group_1_copy.png'
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import { Button, Image, ListItem } from 'react-native-elements'
import ProgressCircle from 'react-native-progress-circle'

import { AntDesign,FontAwesome, Octicons, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Prompt from 'react-native-input-prompt'
import { Card, CardItem } from 'native-base'

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
console.disableYellowBox = true;


  

export default class TestingResources extends React.Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'TestingResources',
      }



//beginning of font code

      state = {
        loaded: false
      };
     
      _loadFontsAsync = async () => {
        let isLoaded = await Font.loadAsync({
          FontBest: require("../assets/fonts/Commissioner-Light.ttf")
        });
        this.setState({ loaded: true });
      };
    
      componentDidMount() {
        this._loadFontsAsync();
      }





    render(){
        const {navigate} = this.props.navigation;

        //MAKE SURE U HAVE THIS IF STATEMENT
        if (!this.state.loaded) {
          return (
          <View>
            <StatusBar hidden />
          </View>)
        }

        //end
        return(
            <View style ={{flex:1,justifyContent:'center',alignItems:'center',}}>
               
            <LinearGradient
                colors = {['#54C7E0','#3090D5','#337CD1','#00CEFC']}
                style={{
               position: 'absolute',
               left: 0,
               right: 0,
               top: 0,
               height:height,
             }}/>

             <View>

          
             <StatusBar hidden/>

            
        

             <View style={{flexDirection:'column', marginBottom:height*0.05}}>
               <TouchableOpacity style={{marginBottom:height*0.07, marginTop:height*-0.02}} onPress={()=>navigate('HomeScreen')}>
             <AntDesign name='arrowleft' color='white' size={25}/>
             </TouchableOpacity> 
             <TouchableOpacity style={styles.button} onPress = {()=> {
                 Alert.alert(
                    '','For which test would you like to view dates/locations for?',
                    [
                      {
                        text: "ACT",
                        onPress:() => navigate('ACTTestLocMAIN'),
                      },
                      { text: "SAT", onPress: () => navigate('SATTestLocMAIN') }
                    ],
                    { cancelable: false }
                  );
             }}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>Testing Center Locations</Text>
                
                <MaterialCommunityIcons name='map-marker' style={{color:'white',}} size={25}/>
                </View>

            </TouchableOpacity>
            <View style ={{marginRight:width*0.04}}>

            </View>
            <TouchableOpacity style={styles.button} onPress={()=> navigate('PracTests')}>
               
                <View  style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest',  marginHorizontal:width*0.01, textAlign:'center'}}>ACT/SAT Practice Tests</Text>
                <View style={{marginRight:width*0.015}}></View>
                <MaterialCommunityIcons name='pencil' style={{color:'white',}} size={25}/>
            </View>
            </TouchableOpacity>
            <View style ={{marginRight:width*0.04}}>

            </View>
            <TouchableOpacity style={styles.button}>
                <View  style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>Additional Resources</Text>
                <View style={{marginRight:width*0.02}}></View>
             <FontAwesome5 name='hands-helping' color='white' size={25}/>
           </View>
            </TouchableOpacity>
             </View>

             
             </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    button: {
        width:width*0.8,
    backgroundColor:'#226bc0',
    borderRadius:25,
    height:height*0.2,
    alignItems:"center",
    justifyContent:"center",
    marginBottom: height*0.03
    }
})