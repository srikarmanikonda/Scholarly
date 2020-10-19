import React, {Component, useState, useEffect} from 'react';
import { View, StatusBar, Picker, Linking, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView, Alert, Share } from 'react-native';
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


import * as Font from 'expo-font';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
// const data1 = require('../SATdata1.json')
// const data2= require('../SATdata2.json')
// const data3= require('../SATdata3.json')
// const data4= require('../SATdata4.json')
// const data5= require('../SATdata5.json')
console.disableYellowBox = true;
var listOfCenters = [];
var cities = [];
var USstates = [];
var finalArr =[];
var datesArray = [];

export default class SATCustom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dropDownSelected: 'java',
            dropDownSelected2: 'def',
            finArr: [],
            loadedFont: false,
            TextInputValue:''
        }
    }
    static navigationOptions = {
        title: 'SATCustom',
      }


     
      _loadFontsAsync = async () => {
        let isLoaded = await Font.loadAsync({
          FontBest1: require("../assets/fonts/Commissioner-Thin.ttf"),
          FontBest3: require("../assets/fonts/Commissioner-Light.ttf"),
        });
        this.setState({ loadedFont: true });
      };
    
      componentDidMount() {
        this._loadFontsAsync();
      }


// THIS WILL HAVE BUTTONS SIMILAR TO THAT IN THE HOME SCREEN which will lead to other individual screens
    
arrayForFlatlist(){
    
}

showCenters (){
    
}

    render(){
        const {navigate} = this.props.navigation;

        if (!this.state.loadedFont) {
            return (
            <View>
              <StatusBar hidden />
            </View>)
          }

        return(

            //TO DO:
            // srikars texts
            //set up maps/api/all that stuff and connect to the test locators
            //each high school can have data shown w/ its marker (figure out exact)
            //set up SAT json
            //maybe add some more to ACT json?
            //IMPLEMENT RADIUS FEATURE
            //MAKE MULTIPLE WAYS TO SEARCH? both sat and act
            //ADD TO DESCRIPTION OF CUSTOM LOCATORS
            //MAKE THE SAT AND ACT CUSTOM ONES HAVE ALLLL THE SAME FEATURES lowkey

            //keep in mind no extraction

            // finish other squares for TR
            // add'l resources - khan academy/those kinds of resources, tutors, registration process, key facts/deadlines, more, etc
            //check memos.

            //change links in wellness?
            //final fixes

            //funds of view/comps/props/funcs/organization ovr, look at prof.
            //Type here wackyness?
            //thing at bottom - how do do? why nav home when press center?

            <View style ={{flex:1,alignItems:'center'}}>
               
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

             <View style={styles.container}>

             <TouchableOpacity style={styles.button} onPress={()=> navigate('ACTTestLocMAIN')}>
                <AntDesign name='arrowleft' style={{color:'white'}} size={20} />
            </TouchableOpacity>
            <View style={{marginRight:width*0.05}}>

            </View>

            <View>
             
            <TextInput style={{borderWidth: 0, backgroundColor: 'white',borderColor: '#777', paddingHorizontal: 8 , width:width*0.6, height:height*0.06, fontSize:16}}
            placeholder= 'Enter a town/school name...' onChangeText={TextInputValue=>this.setState({TextInputValue})}/>

            <Card>
                     <CardItem>
                    <Picker
                    selectedValue={this.state.dropDownSelected2}
                    style={{ height: height*0.04, width: width*0.45 }}
                    onValueChange={(itemValue) => this.setState({dropDownSelected2: itemValue})}
                    >
            <Picker.Item label="(Optional) Max Distance..." value='select' />
            <Picker.Item label="5 Miles" value='5mi' />
            <Picker.Item label="10 Miles" value='10mi' />
            <Picker.Item label="25 Miles" value='25mi' />
            <Picker.Item label="50 Miles" value='50mi' />
            
            </Picker>
            </CardItem>
            </Card>

            </View>
            <View style={{marginRight:width*0.05}}>

            </View>
            <TouchableOpacity style={styles.button} onPress={()=>console.log("Show list based on: "+this.state.TextInputValue)}>
                <Text style={{fontFamily: 'FontBest3' ,color:'white'}}>
                    Go
                </Text>
            </TouchableOpacity>
            </View>

             </View>


             <FlatList data={this.state.finArr} renderItem={({ item })=>(
                 <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Card style={{width:width*0.7}}>
                    <CardItem style={{backgroundColor: '#fff'}}>
                        
                        <Text style={{fontFamily: 'FontBest3' ,fontSize:16}}>
                            {item.name}
                        </Text>

                    </CardItem>
                        
                    <CardItem style={{backgroundColor: '#fff', marginTop:height*-0.015}}>
                        <Text style={{fontFamily: 'FontBest3' ,fontSize:12, color:'#555'}}>
                            {item.city}, {item.state}
                        </Text>
                
                    </CardItem>
                    <CardItem style={{backgroundColor: '#fff', marginTop:height*-0.015}}>
                        <Text style={{fontFamily: 'FontBest3' ,fontSize:12, color:'#555'}}>
                            {item.city}, {item.state}
                        </Text>
                
                    </CardItem>
                </Card>

                <View style={{marginRight:width*0.03}}>
                </View>

                <View style={{marginTop:height*0.03}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.showCenters()}>
                    <MaterialCommunityIcons name='map-marker' style={{color:'white',}} size={20} onPress={()=> navigate('RealMap')}/>
                </TouchableOpacity>
                </View>

                </View>

             )}/>


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