import React, {Component, useState} from 'react';
import { View, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {LinearGradient} from 'expo-linear-gradient'
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as Font from 'expo-font'
import { Asset } from 'expo-asset';
import Firebase from '../components/firebase.js'
import { AntDesign,FontAwesome, Octicons, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const rem = height/380
const wid = width


export default class App extends React.Component {
  state = {
    loaded: false
  };
 
  _loadFontsAsync = async () => {
    let isLoaded = await Font.loadAsync({
      FontBest1: require("../assets/fonts/Commissioner-Thin.ttf"),
      FontBest3: require("../assets/fonts/Commissioner-Light.ttf"),
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
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
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

           <View style={{marginBottom:height*-0.1, marginTop:height*-0.02, flexDirection:'row'}}>
           <TouchableOpacity onPress={()=>navigate('Settings')}>
             <Feather name='settings' size={25} color='white' style={{marginTop:height*0.05}}/>
          </TouchableOpacity>
             <View style={{marginRight:width*0.05}}>

             </View>

             <Text style={{fontFamily:'FontBest1', fontSize: 55, color:'white'}}>
               Scholarly
             </Text>

             <View style={{marginRight:width*0.05}}>
               
             </View>
             <TouchableOpacity onPress={()=>navigate('Profile')}>
             <Feather name='user' size={25} color='white' style={{marginTop:height*0.05}}/>
          </TouchableOpacity>
           </View>

           {/* <View style={{ flex: 3, width: '90%' }}>
                         <View style={{ width: '100%', flex: 1, flexDirection: 'row' }}>
                           <View style={{
                             flex: 1, height: '85%',
                           }}> */}
                           <View>
                             <View style={{flexDirection:'row',marginTop:height*0.25}}>
                             <TouchableOpacity style={styles.button} onPress={()=> navigate('TestingResources')}>
                               <Text style={{fontFamily: 'FontBest3', marginTop:height*0.02, marginBottom:height*-0.02, fontSize: 20, color:'white'}}>
                                 Testing
                               </Text>
                               <Image style={{ width: width*0.15, height: height*0.15 }} source={require('../assets/image.png')} resizeMode='contain'></Image>
                             </TouchableOpacity>
                             <View style={{marginRight:0.1*width}}>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={()=> navigate('Scholarships')}>
                               <Text style={{fontFamily: 'FontBest3', marginTop:height*0.035, marginBottom:height*-0.02, fontSize: 20, color:'white'}}>
                                 Scholarships
                               </Text>
                               <Image style={{ width: width*0.18, height: height*0.18, marginTop:height*-0.02 }} source={require('../assets/scholar.png')} resizeMode='contain'></Image>
                             </TouchableOpacity>
                            
                             </View>

                        

                             <View style={{flexDirection:'row',marginTop:height*0.03}}>
                             <TouchableOpacity style={styles.button} onPress={()=> navigate('Wellness')}>
                               <Text style={{fontFamily: 'FontBest3', marginTop:height*0.02, marginBottom:height*-0.02, fontSize: 20, color:'white'}}>
                                 Wellness
                               </Text>
                               <Image style={{ width: width*0.15, height: height*0.15 }} source={require('../assets/mental.png')} resizeMode='contain'></Image>
                             </TouchableOpacity>
                             <View style={{marginRight:0.1*width}}>
                            </View>

                             <TouchableOpacity style={styles.button} onPress={()=> navigate('College')}>
                               <Text style={{fontFamily: 'FontBest3', marginTop:height*0.02, marginBottom:height*-0.02, fontSize: 20, color:'white'}}>
                                 College
                               </Text>
                               <Image style={{ width: width*0.15, height: height*0.15 }} source={require('../assets/cole.png')} resizeMode='contain'></Image>
                             </TouchableOpacity>
                             </View>
                             </View>


                             {/* <TouchableOpacity style={{
                               shadowOffset: {
                                 width: 0,
                                 height: 4,
                               },
                               shadowOpacity: 0.30,
                               shadowRadius: 3.65,

                               elevation: 8,
                             }} onPress={() =>navigate('TestingResources')}>
                               <View
                                 style={{ height: '75%', alignItems: 'center', borderRadius: 20, width: '100%', justifyContent: 'center', backgroundColor: '#3773BB',top:height*0.23 }}>
                                 <View style={{ flex: 0.2, width: '100%' }}></View>
                                 <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                   <Text style={{ fontFamily:'FontBest3', fontSize: Math.min(12.5 * rem, 22.5 * wid), color: 'white' }}>Testing</Text>
                                 </View>
                                 <View style={{ flex: 3, width: '100%' }}>
                                   <Image style={{ width: '100%', height: '100%' }} source={require('../assets/image.png')} resizeMode='contain'></Image>
                                 </View>
                                 <View style={{ flex: 1, width: '100%' }}></View>
                               </View>
                             </TouchableOpacity>
                           </View>
                           <View style={{ flex: 0.15, height: '95%' }}></View>
                           <View style={{
                             flex: 1, height: '85%',
                           }}>
                             <TouchableOpacity style={{
                               shadowOffset: {
                                 width: 0,
                                 height: 4,
                               },
                               shadowOpacity: 0.30,
                               shadowRadius: 3.65,

                               elevation: 8,
                             }} onPress={() => navigate('Scholarships')}>
                               <View
                                 style={{ height: '75%', alignItems: 'center', borderRadius: 20, width: '100%', justifyContent: 'center', backgroundColor: '#3773BB',top:height*0.23 }}>
                                 <View style={{ flex: 0.2, width: '100%' }}></View>
                                 <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                   <Text onPress={() => this.props.navigation.navigate('Chat')} style={{ fontFamily:'FontBest3', fontSize: Math.min(12.5 * rem, 22.5 * wid), color: 'white' }}>Scholarships</Text>
                                 </View>
                                 <View style={{ flex: 3, width: '100%' }}>
                                   <Image style={{ width: '100%', height: '100%' }} source={require('../assets/scholar.png')} resizeMode='contain'></Image>
                                 </View>
                                 <View style={{ flex: 1, width: '100%' }}></View>
                               </View>
                             </TouchableOpacity>
                           </View>
                         </View>
                         <View style={{ flex: 0.05 }}></View>
                         <View style={{ width: '100%', flex: 1, flexDirection: 'row' }}>
                           <View style={{
                             flex: 1, height: '85%',
                           }}>
                             <TouchableOpacity style={{
                               shadowOffset: {
                                 width: 0,
                                 height: 4,
                               },
                               shadowOpacity: 0.30,
                               shadowRadius: 3.65,

                               elevation: 8,
                             }} onPress={() =>navigate('Wellness')}>
                               <View
                                 style={{ height: '75%', alignItems: 'center', borderRadius: 20, width: '100%', justifyContent: 'center', backgroundColor: '#3773BB',top:height*0.12 }}>
                                 <View style={{ flex: 0.2, width: '100%' }}></View>
                                 <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                   <Text style={{ fontFamily:'FontBest3', fontSize: Math.min(12.5 * rem, 22.5 * wid), color: 'white' }}>Wellness</Text>
                                 </View>
                                 <View style={{ flex: 3, width: '100%' }}>
                                   <Image style={{ width: '100%', height: '100%' }} source={require('../assets/mental.png')} resizeMode='contain'></Image>
                                 </View>
                                 <View style={{ flex: 1, width: '100%' }}></View>
                               </View>
                             </TouchableOpacity>
                           </View>
                           <View style={{ flex: 0.15, height: '95%' }}></View>
                           <View style={{
                             flex: 1, height: '85%',
                           }}>
                             <TouchableOpacity style={{
                               shadowOffset: {
                                 width: 0,
                                 height: 4,
                               },
                               shadowOpacity: 0.30,
                               shadowRadius: 3.65,

                               elevation: 8,
                             }} onPress={() => this.props.navigation.navigate('College')}>

                               <View
                                 style={{ height: '75%', alignItems: 'center', borderRadius: 20, width: '100%', justifyContent: 'center', backgroundColor: '#3773BB',top:height*0.12  }}>
                                 <View style={{ flex: 0.2, width: '100%' }}></View>
                                 <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                   <Text style={{ fontFamily:'FontBest3', fontSize: Math.min(12.5 * rem, 22.5 * wid), color: 'white' }}>College</Text>
                                 </View>
                                 <View style={{ flex: 3, width: '100%' }}>
                                   <Image style={{ width: '100%', height: '100%' }} source={require('../assets/cole.png')} resizeMode='contain'></Image>
                                 </View>
                                 <View style={{ flex: 1, width: '100%' }}></View>
                               </View>
                             </TouchableOpacity> */}
                           {/* </View>
                         </View> */}

                         <View style={{ flex: 0.1, width: '100%' }}>

                         </View>
                       </View>
                    //  </View>

        )
        }
      }
      const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          },
          button: {
                width:width*0.4,
            backgroundColor:'#226bc0',
            borderRadius:25,
            height:height*0.2,
            alignItems:"center",
            justifyContent:"center",
            marginBottom: height*0.03
            }
        });
