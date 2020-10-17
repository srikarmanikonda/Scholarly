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
            

             <View style={{flexDirection:'row', marginBottom:height*0.05}}>
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
                <Text style={{color:'white',fontSize:15, marginHorizontal:width*0.01, textAlign:'center'}}>Testing Center Locations</Text>
            </TouchableOpacity>
            <View style ={{marginRight:width*0.04}}>

            </View>
            <TouchableOpacity style={styles.button} onPress={()=> navigate('PracTests')}>
               
                <Text style={{color:'white',fontSize:15, marginHorizontal:width*0.01, textAlign:'center'}}>ACT/SAT Practice Tests</Text>
            
            </TouchableOpacity>
            <View style ={{marginRight:width*0.04}}>

            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:'white',fontSize:15, marginHorizontal:width*0.01, textAlign:'center'}}>Additional Resources</Text>
            </TouchableOpacity>
             </View>

             <View style={{flexDirection:'row'}}>
             <TouchableOpacity style={styles.button}>
                <Text style={{color:'white',fontSize:15, marginHorizontal:width*0.01, textAlign:'center'}}>?</Text>
            </TouchableOpacity>
            <View style ={{marginRight:width*0.04}}>

            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:'white',fontSize:15, marginHorizontal:width*0.01, textAlign:'center'}}>?</Text>
            </TouchableOpacity>
            <View style ={{marginRight:width*0.04}}>

            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:'white',fontSize:15, marginHorizontal:width*0.01, textAlign:'center'}}>?</Text>
            </TouchableOpacity>
             </View>
             </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width:width*0.27,
    backgroundColor:'#226bc0',
    borderRadius:25,
    height:height*0.2,
    alignItems:"center",
    justifyContent:"center",
    }
})