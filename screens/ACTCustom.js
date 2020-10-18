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

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const data = require('../ACTdata.json')
console.disableYellowBox = true;
var listOfCenters = [];
var cities = [];
var USstates = [];
var finalArr =[];

export default class ACTCustom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dropDownSelected: 'java',
            finArr: []
        }
    }
    static navigationOptions = {
        title: 'ACTCustom',
      }


// THIS WILL HAVE BUTTONS SIMILAR TO THAT IN THE HOME SCREEN which will lead to other individual screens
    
arrayForFlatlist(){
    finalArr=[];
    for (var i=0; i<listOfCenters.length; i++){
        finalArr.push({ name: listOfCenters[i], city: cities[i], state: USstates[i], key: i})
    }
    console.log(finalArr);
    this.setState({finArr: finalArr})
}

showCenters (){
    listOfCenters=[];
    cities=[];
    USstates=[];
    var selectedDate = this.state.dropDownSelected
    for (var i=0; i<data.length; i++){
        var ayo = data[i].dates;
        if (ayo!=null){
        if (ayo.indexOf(selectedDate)!=-1){
            listOfCenters.push(data[i].schoolName)
            cities.push(data[i].city)
            USstates.push(data[i].state)
          }
        }
    }
    console.log("showing listOfCenters"+listOfCenters);
    console.log("showing cities"+cities);
    console.log("showing USStates"+USstates);
    this.arrayForFlatlist();
}

    render(){
        const {navigate} = this.props.navigation;
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

            //funds of view/comps/props/organization ovr, look at prof.
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

             <TouchableOpacity style={styles.button} onPress={()=>this.showCenters()}>
                <AntDesign name='arrowleft' style={{color:'white'}} size={20} onPress={()=> navigate('ACTTestLocMAIN')}/>
            </TouchableOpacity>
            <View style={{marginRight:width*0.05}}>

            </View>
             
                 <Card>
                     <CardItem>
                    <Picker
                    selectedValue={this.state.dropDownSelected}
                    style={{ height: height*0.04, width: width*0.4 }}
                    onValueChange={(itemValue) => this.setState({dropDownSelected: itemValue})}
                    >
            <Picker.Item label="Select a Test Date..." value='select' />
            <Picker.Item label="09/12/20" value="09/12/20" />
            <Picker.Item label="09/13/20" value="09/13/20" />
            <Picker.Item label="09/19/20" value="09/19/20" />
            <Picker.Item label="10/10/20" value="10/10/20" />
            <Picker.Item label="10/17/20" value="10/17/20" />
            <Picker.Item label="10/24/20" value="10/24/20" />
            <Picker.Item label="10/25/20" value="10/25/20" />
            <Picker.Item label="12/12/20" value="12/12/20" />
            <Picker.Item label="02/06/21" value="02/06/21" />
            <Picker.Item label="04/17/21" value="04/17/21" />
            <Picker.Item label="06/12/21" value="06/12/21" />
            <Picker.Item label="07/17/21" value="07/17/21" />
            </Picker>
            </CardItem>
            </Card>
            <View style={{marginRight:width*0.05}}>

            </View>
            <TouchableOpacity style={styles.button} onPress={()=>this.showCenters()}>
                <Text style={{color:'white'}}>
                    Go
                </Text>
            </TouchableOpacity>
            </View>

             </View>


             <FlatList data={this.state.finArr} renderItem={({ item })=>(
                 <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Card style={{width:width*0.7}}>
                    <CardItem style={{backgroundColor: '#fff'}}>
                        
                        <Text style={{fontSize:16}}>
                            {item.name}
                        </Text>

                    </CardItem>
                        
                    <CardItem style={{backgroundColor: '#fff', marginTop:height*-0.015}}>
                        <Text style={{fontSize:12, color:'#555'}}>
                            {item.city}, {item.state}
                        </Text>
                
                    </CardItem>
                </Card>

                <View style={{marginRight:width*0.03}}>
                </View>

                <View style={{marginTop:height*0.03}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.showCenters()}>
                    <MaterialCommunityIcons name='map-marker' style={{color:'white',}} size={20} onPress={()=> console.log("showing on map, when connect with GMaps use method in ACTTestLoc")}/>
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