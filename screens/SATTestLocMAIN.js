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

import { AntDesign,FontAwesome, Octicons, Feather, Foundation, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Prompt from 'react-native-input-prompt'
import { Card, CardItem } from 'native-base'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
console.disableYellowBox = true;

export default class SATTestLocMAIN extends React.Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'SATTestLocMAIN',
      }


// THIS WILL HAVE BUTTONS SIMILAR TO THAT IN THE HOME SCREEN which will lead to other individual screens
    

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style ={{flex:1,justifyContent:'center',alignItems:'center'}}>
               
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
             
             <View>
             <TouchableOpacity style={styles.button} onPress={()=>navigate('TestingResources')}>
                <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:width*0.1}}>
                <AntDesign name ='arrowleft' style={{color:'white', marginLeft:width*0.0}} size={30} />
                <Text style={{color:'white',fontSize:20, marginRight:width*0.0, marginLeft:width*0.0, textAlign:'center'}}>Back to Testing Resources</Text>
                </View>
            </TouchableOpacity>
            <View style ={{marginBottom:height*0.05}}>

            </View>
            <TouchableOpacity style={styles.button} onPress={()=>navigate('SATTestLoc')}>
                <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:width*0.1}}>
                <Entypo name ='globe' style={{color:'white', marginLeft:width*0.0}} size={30} />
                <Text style={{color:'white',fontSize:16, marginRight:width*0.0, marginLeft:width*0.005, textAlign:'center'}}>View the official SAT Test Center Locator</Text>
                </View>
            </TouchableOpacity>
            <View style ={{marginBottom:height*0.05}}>

            </View>
            <TouchableOpacity style={{
                
                width:width*0.7,
            backgroundColor:'#226bc0',
            borderRadius:25,
            height:height*0.2,
            alignItems:"center",
            justifyContent:"center",
        }} 
        onPress={()=>console.log('SAT custom loc.')}>
        <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:width*0.1}}>
            <Foundation name ='burst-new' style={{color:'white', marginLeft:width*-0.0}} size={40} />
            <View style={{marginRight:width*0.02}}>
            </View>
            <Text style={{color:'white',fontSize:14, marginRight:width*0.0, marginLeft:width*0.0, textAlign:'center'}}>Try our custom test center locator that allows you to search for specific test dates and distances, and more easily view testing centers on a map (work in progress)!</Text>
            </View>
        </TouchableOpacity>
             </View>
             <View style ={{marginBottom:height*0.05}}>

            </View>
            
             </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width:width*0.7,
    backgroundColor:'#226bc0',
    borderRadius:25,
    height:height*0.15,
    alignItems:"center",
    justifyContent:"center",
    }
})