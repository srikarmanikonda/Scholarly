import React, {Component, useState, useRef, useEffect} from 'react';
import { View, Alert, Modal, TouchableHighlight, StatusBar, StyleSheet, ScrollView, Linking, ActivityIndicator, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView, Share } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {LinearGradient} from 'expo-linear-gradient'
import { Camera } from 'expo-camera'
import Logo from '../assets/Group_1_copy.png'
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import { Button, Image, ListItem } from 'react-native-elements'
import email from 'react-native-email'
import { WebView } from 'react-native-webview';
import { AntDesign,FontAwesome, Fontisto, Octicons, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';
import * as Font from 'expo';
import { AppLoading } from 'expo';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
var emailAd ='';
var emailFromFireb = 'andrewtikhonov04@gmail.com'

const fetchFonts = () => {
        return Font.loadAsync({
                'FontBest': require('../assets/fonts/Commissioner-Medium.ttf')
        })
}


export default function PracTests({ navigation }) {

    const [isVis, setVis] = useState(false)

    const navBack = () => {
        navigation.navigate('TestingResources')
    }

    const handleEmailACT = (testLink) => {
        const to = [emailAd] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: [], // string or array of email addresses
            bcc: '', // string or array of email addresses
            subject: 'ACT Practice Test',
            body: 'Click here to download/open your ACT practice test! \n \n'+testLink
        }).catch(console.error)
    }

    const handleEmailSAT = (testLink) => {
        const to = [emailAd] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: [], // string or array of email addresses
            bcc: '', // string or array of email addresses
            subject: 'SAT Practice Test',
            body: 'Click here to download/open your SAT practice test! \n \n'+testLink
        }).catch(console.error)
    }


    const navTR = () => {
        navigation.navigate('TestingResources')
        console.log(height);
      }

      const loadInBrowser1 = () => {
        Linking.openURL('https://cdn2.hubspot.net/hubfs/360031/prepact20182019.pdf').catch(err => console.error("Couldn't load page", err));
      };
    
      const loadInBrowser2 = () => {
        Linking.openURL('https://cdn2.hubspot.net/hubfs/360031/ACT-2015-16.pdf').catch(err => console.error("Couldn't load page", err));
      };
    
      const loadInBrowser3 = () => {
        Linking.openURL('https://cdn2.hubspot.net/hub/360031/file-2226679255.pdf').catch(err => console.error("Couldn't load page", err));
      };
    
      const loadInBrowser4 = () => {
        Linking.openURL('https://cdn2.hubspot.net/hub/360031/file-2227156987-pdf/Documents/ACT_Test_2011-12.pdf').catch(err => console.error("Couldn't load page", err));
      };
    
      const loadInBrowser5 = () => {
        Linking.openURL('https://cdn2.hubspot.net/hub/360031/file-2227156982-pdf/Documents/ACT_Test_2008-09.pdf').catch(err => console.error("Couldn't load page", err));
      };
    
      const loadInBrowser6 = () => {
        Linking.openURL('https://cdn2.hubspot.net/hub/360031/file-2227156992-pdf/Documents/ACT_Test_2005-06.pdf').catch(err => console.error("Couldn't load page", err));
      };

      const loadSAT = (numTest) => {
          Linking.openURL('https://collegereadiness.collegeboard.org/pdf/sat-practice-test-'+numTest+'.pdf')
      }

      const returnCorrLink = (numTestOK) => {
          return 'https://collegereadiness.collegeboard.org/pdf/sat-practice-test-'+numTestOK+'.pdf';
      }

      const [loaded, setLoaded] = useState(false);

if (!loaded){
        return <AppLoading startAsync={fetchFonts} onFinish={()=>setLoaded(true)} onError={(err)=>console.log(err)}/>
}
    return(
        <View>

            <StatusBar hidden/>

        <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={navTR}>
            <View style ={{marginTop: 3, marginLeft: 0.05*width}}>
                <AntDesign name='arrowleft' size ={25} color='white'/>
            </View>
          </TouchableOpacity>
          <Text style={{fontFamily: 'FontBest',fontFamily: 'FontBest', marginLeft:width*.11, marginRight:width*0.05, fontSize:13, marginTop:height*0.00, color:'white'}}>
              View, download, and email ACT/SAT practice tests here!
          </Text>
        </View>

        <ScrollView>
        <Modal animationType = {"slide"} transparent = {false}
               visible = {isVis}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>
                  
                  <TouchableHighlight onPress = {() => {
                     setVis(!isVis)}}>
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>
               </View>
            </Modal>

        <View style={{marginTop: height*0.00,}}>
        <LinearGradient
                colors = {['#54C7E0','#349DE8','#00CEFC']}
                style={{
               position: 'absolute',
               left: 0,
               right: 0,
               top: 0,
               height:height*2,
             }}/>
        <View style={{alignItems:'center'}}>
        <Text style={{fontFamily: 'FontBest',alignItems:'center', marginTop:height*0.03, marginBottom:height*0.0, marginHorizontal:width*0.05, fontSize:12}}>
            Note: ACT practice test answers can be found near the end of each respective booklet. SAT practice test answers can be accessed by clicking the icon to the right of each respective practice test.
        </Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={{fontFamily: 'FontBest',alignItems:'center', marginTop:height*0.01, marginBottom:height*0.01}}>
            __________________________________________
        </Text>
        </View>
        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>

        <TouchableOpacity style={styles.button} onPress={loadInBrowser1}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailACT('https://cdn2.hubspot.net/hubfs/360031/prepact20182019.pdf')}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:16}}>
            ACT Practice Test: 2018-19
        </Text>
        
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={loadInBrowser2}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailACT('https://cdn2.hubspot.net/hubfs/360031/ACT-2015-16.pdf')}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        <View style={{}}>
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:16}}>
            ACT Practice Test: 2015-16
        </Text>
        </View>
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={loadInBrowser3}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailACT('https://cdn2.hubspot.net/hub/360031/file-2226679255.pdf')}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:16}}>
            ACT Practice Test: 2014-15
        </Text>
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={loadInBrowser4}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailACT('https://cdn2.hubspot.net/hub/360031/file-2227156987-pdf/Documents/ACT_Test_2011-12.pdf')}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:16}}>
            ACT Practice Test: 2011-12
        </Text>
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={loadInBrowser5}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailACT('https://cdn2.hubspot.net/hub/360031/file-2227156982-pdf/Documents/ACT_Test_2008-09.pdf')}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:16}}>
            ACT Practice Test: 2008-09
        </Text>
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={loadInBrowser6}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailACT('https://cdn2.hubspot.net/hub/360031/file-2227156992-pdf/Documents/ACT_Test_2005-06.pdf')}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:16}}>
            ACT Practice Test: 2005-06
        </Text>
        
        </View>

        <View style={{alignItems:'center'}}>
        <Text style={{fontFamily: 'FontBest',alignItems:'center', marginTop:height*0.02, marginBottom:height*0.02}}>
        __________________________________________
        </Text>
        </View>

        <View style={{alignItems:'center'}}>
        <Text style={{fontFamily: 'FontBest',alignItems:'center', marginTop:height*0.02, marginBottom:height*0.02, fontSize:12}}>
            Note: SAT Practice Tests 2 and 4 are currently unavailable.
        </Text>
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('1')}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailSAT(returnCorrLink('1'))}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:15}}>
            SAT Practice Test #1
        </Text>

        <View style={{marginRight:width*0.03}}>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('1-answers')}>
                <Text style={{fontFamily: 'FontBest',color:'white', fontSize:11}}>Answers</Text>
        </TouchableOpacity>
        
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('3')}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailSAT(returnCorrLink('3'))}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:15}}>
            SAT Practice Test #3
        </Text>

        <View style={{marginRight:width*0.03}}>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('3-answers')}>
                <Text style={{fontFamily: 'FontBest',color:'white', fontSize:11}}>Answers</Text>
        </TouchableOpacity>
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('5')}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailSAT(returnCorrLink('5'))}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:15}}>
            SAT Practice Test #5
        </Text>

        <View style={{marginRight:width*0.03}}>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('5-answers')}>
                <Text style={{fontFamily: 'FontBest',color:'white', fontSize:11}}>Answers</Text>
        </TouchableOpacity>
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('6')}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailSAT(returnCorrLink('6'))}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:15}}>
            SAT Practice Test #6
        </Text>

        <View style={{marginRight:width*0.03}}>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('6-answers')}>
                <Text style={{fontFamily: 'FontBest',color:'white', fontSize:11}}>Answers</Text>
        </TouchableOpacity>
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('7')}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailSAT(returnCorrLink('7'))}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:15}}>
            SAT Practice Test #7
        </Text>

        <View style={{marginRight:width*0.03}}>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('7-answers')}>
                <Text style={{fontFamily: 'FontBest',color:'white', fontSize:11}}>Answers</Text>
        </TouchableOpacity>
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('8')}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailSAT(returnCorrLink('8'))}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:15}}>
            SAT Practice Test #8
        </Text>

        <View style={{marginRight:width*0.03}}>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('8-answers')}>
                <Text style={{fontFamily: 'FontBest',color:'white', fontSize:11}}>Answers</Text>
        </TouchableOpacity>
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('9')}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailSAT(returnCorrLink('9'))}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:15}}>
            SAT Practice Test #9
        </Text>

        <View style={{marginRight:width*0.03}}>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('9-answers')}>
                <Text style={{fontFamily: 'FontBest',color:'white', fontSize:11}}>Answers</Text>
        </TouchableOpacity>
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('10')}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailSAT(returnCorrLink('10'))}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.03, fontSize:15}}>
            SAT Practice Test #10
        </Text>

        <View style={{marginRight:width*0.014}}>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('10-answers')}>
                <Text style={{fontFamily: 'FontBest',color:'white', fontSize:11}}>Answers</Text>
        </TouchableOpacity>
        
        </View>

        <View style={{marginLeft:height*0.02, marginTop:height*0.03, flexDirection:'row'}}>
        <TouchableOpacity style={styles.button} onPress={()=>loadSAT('')}>
                <AntDesign name='download' color='white' size={20}/>
        </TouchableOpacity>
        <View style={{marginRight:10}}>

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleEmailSAT(returnCorrLink(''))}>
                <Fontisto name='email' color='white' size={20}/>
        </TouchableOpacity>

        
        <Text style={{fontFamily: 'FontBest',marginTop: height*0.023, marginLeft:width*0.04, fontSize:15}}>
            SAT Practice Test
        </Text>
        
        </View>



        </View>
        </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    tabBarContainer: {
      padding: 15,
      flexDirection: 'row',
      justifyContent:'space-around',
      backgroundColor: '#337cd1',
    },
    button: {
        width:width*0.15,
        backgroundColor:'#337cd1',
        borderRadius:25,
        height:height*0.08,
        alignItems:"center",
        justifyContent:"center",
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 100
     },
     modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7021a',
        padding: 100
     },
     text: {
        color: '#3f2949',
        marginTop: 10
     }
  })
