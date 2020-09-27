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
                colors = {['#29bdde','#337cd1','#fff']}
                style={{
               position: 'absolute',
               left: 0,
               right: 0,
               top: 0,
               height:height,
             }}/>

             <View>

             <View style={{flexDirection:'row', marginBottom:height*0.05}}>
             <TouchableOpacity style={styles.button} onPress = {()=> navigate('TestLoc')}>
                <Text>TC Loc.</Text>
            </TouchableOpacity>
            <View style ={{marginRight:10}}>

            </View>
            <TouchableOpacity style={styles.button} onPress={()=> navigate('PracTests')}>
                <Text>Prac Te.</Text>
            </TouchableOpacity>
            <View style ={{marginRight:10}}>

            </View>
            <TouchableOpacity style={styles.button}>
                <Text>?</Text>
            </TouchableOpacity>
             </View>

             <View style={{flexDirection:'row'}}>
             <TouchableOpacity style={styles.button}>
                <Text>?</Text>
            </TouchableOpacity>
            <View style ={{marginRight:10}}>

            </View>
            <TouchableOpacity style={styles.button}>
                <Text>?</Text>
            </TouchableOpacity>
            <View style ={{marginRight:10}}>

            </View>
            <TouchableOpacity style={styles.button}>
                <Text>?</Text>
            </TouchableOpacity>
             </View>
             </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width:width*0.25,
    backgroundColor:'#226bc0',
    borderRadius:25,
    height:height*0.09,
    alignItems:"center",
    justifyContent:"center",
    }
})