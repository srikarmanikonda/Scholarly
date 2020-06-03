import React, {Component, useState} from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image,Alert, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {LinearGradient} from 'expo-linear-gradient'
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Map extends React.Component{
  constructor(props) {
    var latitude =  0
     var longitude = 0
      super(props);
      this.state = {
          latitudeDelta: 0.0922,
          longitudeDelta:  0.0421,
        }
      };

    static navigationOptions = {
      title: 'Map',
    }


    render(){
      async function getLocationAsync() {
           let { status } = await Location.requestPermissionsAsync();
           if (status !== 'granted') {
               Alert.alert('Permission to access location was denied, we need your location to access your proximity to COVID hotspots')

           }
           let locito = await Location.getCurrentPositionAsync({});
           console.log(locito)
latitude =  locito.coords.latitude
longitude = locito.coords.longitude

           // Center the map on the location we just fetched.

         }
      const {navigate} = this.props.navigation;
         getLocationAsync();
         console.log(latitude)
         console.log(longitude)
    return (
        <View style={styles.container}>
        <MapView
        style = {styles.map}
  initialRegion={{
    latitude: latitude,
    longitude:longitude,
    latitudeDelta: this.state.latitudeDelta,
    longitudeDelta:this.state.longitudeDelta,
  }}
/>
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
      map:{
        height:height,
        width:width
      }
      });
