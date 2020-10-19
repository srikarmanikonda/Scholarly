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


  

export default class AddResources extends React.Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'AddResources',
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

            
             <TouchableOpacity style={{marginBottom:height*0.06, marginTop:height*0.05}} onPress={()=>navigate('TestingResources')}>
             <AntDesign name='arrowleft' color='white' size={25}/>
             </TouchableOpacity> 

<ScrollView>
             <View style={{flexDirection:'column', marginBottom:height*0.05}}>
               

             {/* <View style={{marginRight:width*0.15, marginLeft:width*0.15}}> */}
             {/* <Text style={{fontSize: 15, textAlign:'center',  fontFamily:'FontBest', color:'white',}}>
                 Aid your test preparation with this variety of resources! Look through each to see what helps you!
             </Text> */}
             {/* </View> */}
             <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>CollegeBoard Hub</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>ACT Hub</Text>

                
                </View>
            </TouchableOpacity>

            <Text style={{color:'white', textAlign:'center',marginTop:height*0.0, marginBottom:height*0.05}} >
            __________________________________________
            </Text>

             <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>Khan Academy SAT Practice</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>SAT Study Groups</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
   
    <View  style={{flexDirection:'row'}}>
    <Text style={{color:'white',fontSize:17, fontFamily:'FontBest',  marginHorizontal:width*0.01, textAlign:'center'}}>ACT Academy</Text>
    <View style={{marginRight:width*0.015}}></View>
    
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
   
    <View  style={{flexDirection:'row'}}>
    <Text style={{color:'white',fontSize:15, fontFamily:'FontBest',  marginHorizontal:width*0.01, textAlign:'center'}}>Official Resources on the ACT Website</Text>
    <View style={{marginRight:width*0.00}}></View>
    
</View>
</TouchableOpacity>
            

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
               
                <View  style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest',  marginHorizontal:width*0.01, textAlign:'center'}}>PrepScholar Test Prep</Text>
                <View style={{marginRight:width*0.015}}></View>
                
            </View>
            </TouchableOpacity>
            
           
           
            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View  style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>Princeton Review Test Prep</Text>
                
             
           </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
               
                <View  style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest',  marginHorizontal:width*0.01, textAlign:'center'}}>Sylvan Learning Test Prep</Text>
                <View style={{marginRight:width*0.015}}></View>
                
            </View>
            </TouchableOpacity>
            
<TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
   
    <View  style={{flexDirection:'row'}}>
    <Text style={{color:'white',fontSize:17, fontFamily:'FontBest',  marginHorizontal:width*0.01, textAlign:'center'}}>More Test Prep Services</Text>
    
    
</View>
</TouchableOpacity>

<Text style={{color:'white', textAlign:'center', marginTop:height*0.0, marginBottom:height*0.05}} >
            __________________________________________
            </Text>





            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:15, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>CollegeBoard Main FAQ/Help Page</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:15, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>CollegeBoard SAT-Specific Help Page</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>SAT Registration</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>ACT Help Page</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>ACT Registration</Text>
                </View>
            </TouchableOpacity>


            <Text style={{color:'white', textAlign:'center', marginTop:height*0.0, marginBottom:height*0.05}} >
            __________________________________________
            </Text>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>Find a Tutor - University Tutor</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>Find a Tutor - Wyzant</Text>
                </View>
            </TouchableOpacity>

            <Text style={{color:'white', textAlign:'center', marginTop:height*0.0, marginBottom:height*0.05}} >
            __________________________________________
            </Text>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>PSAT 8/9 Info</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>PSAT 10 Info</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>PSAT/NSQMT Info</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("website open")}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:17, fontFamily:'FontBest', marginHorizontal:width*0.01, textAlign:'center'}}>SAT Subject Test Info</Text>
                </View>
            </TouchableOpacity>

            


             </View>
             </ScrollView>
             
            


             
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
    height:height*0.06,
    alignItems:"center",
    justifyContent:"center",
    marginBottom: height*0.03
    }
})