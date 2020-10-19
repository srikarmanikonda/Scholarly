import React, {Component, useState, useEffect} from 'react';
import { View, StatusBar, SafeAreaView, Picker, Linking, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView, Alert, Share } from 'react-native';
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
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Prompt from 'react-native-input-prompt'
import { Card, CardItem } from 'native-base'

import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
 
// Initialize the module (needs to be done only once)
Geocoder.init("AIzaSyCBRodqAD2R6X1H0fsWRWw1rHbAnSLiOrg"); // use a valid API key
// With more options
// Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language
 

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const data = require('../ACTdata.json')
console.disableYellowBox = true;
var listOfCenters = [];
var cities = [];
var USstates = [];
var finalArr =[];

// var cord0;
// var cord1;
// var cord2;
// var cord3;
// var cord4;
// var cord5;

// var cord0Y;
// var cord1Y;
// var cord2Y;
// var cord3Y;
// var cord4Y;
// var cord5Y;

// var retVal;




export default class RealMap extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    static navigationOptions = {
        title: 'RealMap',
      }


//     getLat(x){
//         Geocoder.from(x)
//         .then(json => {
//     var location = json.results[0].geometry.location;
//     console.log("SHOWING"+location.lat)
//             retVal=location.lat
//    return location;

//         })
//         .catch(error => console.warn(error));
//       }

//     getLong(x){
//         Geocoder.from(x)
//         .then(json => {
//     var location = json.results[0].geometry.location;

//     var returnedVal = location.lng
    
//     return returnedVal;
//         })
//         .catch(error => console.warn(error));
//       }
    

    //   hello=this.getLat('Libertyville High School');

    //   async componentDidMount(){
    //       const { status } = await Permissions.getAsync(Permissions.LOCATION)
    //       if (status !== 'granted') {
    //         const response = await Permissions.askAsync(Permissions.LOCATION)
    //       }

    //       navigator.geolocation.getCurrentPosition(
    //         ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, this.mergeCoords),
    //         (error) => console.log('Error:', error)
    //       )
    //   }

    render(){
        const {navigate} = this.props.navigation;

    //     console.log(this.getLat('Mundelein High School', cord0))
    //     console.log('SHOWING CORD 0, show pls '+cord0);
    //  cord1= this.getLat('Mundelein High School');
    //  cord2= this.getLat('Mundelein High School');
    //  cord3= this.getLat('Mundelein High School');
    //  cord4= this.getLat('Mundelein High School');
    //  cord5= this.getLat('Mundelein High School');

    // cord0Y = this.getLong('Mundelein High School');
    // cord1Y = this.getLong('Mundelein High School');
    // cord2Y = this.getLong('Mundelein High School');
    // cord3Y = this.getLong('Mundelein High School');
    // cord4Y = this.getLong('Mundelein High School');
    // cord5Y = this.getLong('Mundelein High School');
    
        // const {latitude, longitude} = this.state
       
            // mLat = this.getLat('Libertyville High School')
            // mLong = this.getLong('Libertyville High School')
            // hello= this.getLat('Libertyville High School')
        
        // if(latitude){
        return(
            
        <View>
                
                <StatusBar hidden/>
            
            <View style={{height:height*0.09, backgroundColor: '#337cd1'}}>
                <TouchableOpacity style={{marginTop:height*0.025, marginLeft:width*0.07}} onPress={()=> navigate('ACTTestLoc')}>
            <AntDesign name='arrowleft' size={27} color='white'/>
            </TouchableOpacity>
            </View>
        <MapView showsUserLocation style={{height}} loadingEnabled={true} region={{
            latitude: 42.24, 
            longitude: -87.98,
            latitudeDelta: 0.15,
            longitudeDelta: 0.115
        }}>


    
{/* <Marker pinColor='#3090D5' coordinate={{markerLat, markerLong}}/> */}
<Marker pinColor='#3090D5' coordinate={{latitude: 42.2846, longitude: -87.9668}} title={data[0].schoolName} description={'Test Dates: '+data[0].dates}/>
<Marker pinColor='#3090D5' coordinate={{latitude: 42.1993, longitude: -87.9455}} title={data[1].schoolName} description={'Test Dates: '+data[1].dates}/>
<Marker pinColor='#3090D5' coordinate={{latitude: 42.2719, longitude: -87.9864}} title={data[2].schoolName} description={'Test Dates: '+data[2].dates}/>
<Marker pinColor='#3090D5' coordinate={{latitude: 42.2272, longitude: -87.9495}} title={data[3].schoolName} description={'Test Dates: '+data[3].dates}/>
<Marker pinColor='#3090D5' coordinate={{latitude: 42.2711, longitude: -88.0222}} title={data[4].schoolName} description={'Test Dates: '+data[4].dates}/>


{/* <Marker pinColor='#3090D5' coordinate={{mLat, mLong }}/> */}

        </MapView>

        </View>

        )
    
    return (
        <View style={{justifyContent:'center'}}>
            <Text>
                We need your location permission for this!
            </Text>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    button: {
        width:width*0.12,
    backgroundColor:'#226bc0',
    borderRadius:25,
    height:height*0.06,
    alignItems:"center",
    justifyContent:'center'
    },
    container: {
        flexDirection:'row',
        paddingTop: 40,
        alignItems: "center"
      }
})