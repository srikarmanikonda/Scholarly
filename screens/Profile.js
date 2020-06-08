import React, {Component, useState, useEffect} from 'react';
import { View, StatusBar, Linking, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView, Alert, Share } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
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


//what is props? constructor? async? await? promise? state? lifecycle? api? function vs class? scrollview?
//drawer nav in one comp only? async storage?
//use elements from PV
//add - ways to help out
//flex?????
//https://www.fidelitycharitable.org/articles/three-ways-you-can-help-during-the-covid-19-pandemic.html


//ALL IN ACHIEVEMENTS:

//wearing mask 
//sharing info
//visiting small businesses

//---

//password reset/settings?

//goto achievements
//friends u may know

//description of themselves DONE

//ways to make conform
//what is necessary in every view?

//() in onPress vs no ()

//something else in settings????????
//streak of what?

//do NOT put style in touchable opacity
//figure out parenthesis garbage

//generally organize app/developments...

//saving data? why some reload and some don't
//always use state??
//state vs var, class vs function (and state in it)??
//slight mods later?

var imgurl='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
var sad='#ccc'
var neu='#ccc'
var hap='#ccc'

var name = 'Andrew Tikhonov'
var goal = 2

var hours = 1

var percentage=(hours/goal)*100
var streak = 10;
var userDesc='I am currently a student at Vernon Hills High School and in my spare time enjoy programming and playing tennis.'
var x = 1.5

export default function ProfileScreen({ navigation }) {
  
  const [sadColor, setSad] = useState(sad)
  const [neuColor, setNeu] = useState(neu)
  const [hapColor, setHap] = useState(hap)
  const [image, setImage] = useState(imgurl);
  const [visible, setVis] = useState(false)
  const [visible2, setVis2] = useState(false)
  const [desc, setDesc]= useState(userDesc)
  const [goalTime, setGoal]=useState(goal)
  const [hoursHours, setHours]=useState(hours);
  const [percPerc, setPerc]=useState(percentage);
  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);


  const navSettings = () => {
    navigation.navigate('Settings')
  }

  const loadInBrowser = () => {
    Linking.openURL('https://covid19responsefund.org/en/').catch(err => console.error("Couldn't load page", err));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      imgurl = result.uri
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', marginTop:x+'%' }}>
      
      <StatusBar hidden/>
      <LinearGradient colors = {['#cc2b5e','#753a88']}style={{position: 'absolute',left: 0,right: 0,top: 0,height:height, marginTop:-x+'%'}}/>
      <Prompt visible={visible}titleStyle={{fontSize:20, fontWeight:'normal'}}cancelButtonTextStyle={{fontSize:20}}submitButtonTextStyle={{fontSize:20}}title="Enter a new brief description of yourself here."placeholder="Max 150 characters"
    onCancel={() =>
        setVis(false)
    }
    onSubmit={text =>{
      if (text.length<=150){
        setDesc(text)
        setVis(false)
      } else {
        Alert.alert(
          "Exceeding 150 Characters",
          "Please shorten your description.",
          [
            { text: "OK", }
          ],
          { cancelable: true },
        
        );
      }
    }
    }
/>

<Prompt visible={visible2}titleStyle={{fontSize:20, fontWeight:'normal'}}cancelButtonTextStyle={{fontSize:20}}submitButtonTextStyle={{fontSize:20}}title={"Your current goal is "+goalTime+" hours."}placeholder="Enter a new goal in hours..."
    onCancel={() =>
        setVis2(false)
    }
    onSubmit={text2 =>{
        goal=parseInt(text2);
        percentage=(hours/goal)*100
        setGoal(goal);
        setPerc(percentage);
        setVis2(false)
    }
    }
/>
     

      <View style={{flexDirection:'row', justifyContent:'center', marginTop:'0%'}}>
    
        <Feather name='menu' size={25} style={{color:'white', marginRight:'75%'}}/>
        <TouchableOpacity onPress={navSettings}>
        <Octicons name='gear' size={25} style={{color:'white'}} />
        </TouchableOpacity>
        
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:'0%'}}>

        <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'center' }}>
          {image && <Image source={{ uri: image }} style={{ width: 140, height: 140, borderRadius:70, overflow:"hidden"}} />}
          <View style={{marginTop:'3%'}} >
          </View>
          <TouchableOpacity onPress={pickImage}>
            <MaterialIcons name = 'switch-camera' size = {25} style={{color:'#ccc'}}/>
          </TouchableOpacity>
        </View>
        <View style={{marginRight: '2%'}} >
        </View>
        <View style={{flex: 1, marginTop:'10%'}}>
         
          <Text style={{color: '#ddd', fontSize:22, marginTop: '-25%', marginLeft: '-5%', marginRight:'5%'}}>
            {name}
          </Text>
          
          <Text style={{color: '#ddd', fontSize:12.5, marginTop: '0%', marginLeft: '-5%'}}>
              
              {desc}
          </Text>
          <View style={{marginLeft:'-5%'}}>
          <TouchableOpacity onPress={()=>{setVis(true)
          }}>
            <Feather name = 'edit' size = {22} style={{color:'#ccc', marginTop:'5%', marginLeft:'0%'}}/>
          </TouchableOpacity>
          </View>
          
        </View>
      </View>
      <View style={{alignItems:'center'}}>
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:17, color: '#ccc'}} >
              How are you today?
            </Text>
          </View>
          <View style ={{flexDirection:'row', alignItems:'center', marginTop:'3%', marginRight:'0%'}}>
            <TouchableOpacity onPress={()=>{setSad('#cd3737')
            setNeu('#ccc')
            setHap('#ccc')
            sad='#cd3737'
            neu='#ccc'
            hap='#ccc'}}>
            <Entypo name ='emoji-sad' style={{color:sadColor, marginRight:'3%'}} size = {45} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setNeu('#cdbe37')
            setSad('#ccc')
            setHap('#ccc')
            neu='#cdbe37'
            hap='#ccc'
            sad='#ccc'
            }}>
            <Entypo name ='emoji-neutral' style={{color:neuColor, marginRight:'3%'}} size = {45} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{setHap('#37cd8a')
          setSad('#ccc')
          setNeu('#ccc')
          hap='#37cd8a'
          neu='#ccc'
          sad='#ccc'}}>
            <Entypo name ='emoji-happy' style={{color:hapColor, marginRight:'0%'}} size = {45}/>
          </TouchableOpacity>
          </View>
      </View>
      <View style={{marginTop:'0%', marginBottom:'-0%',marginLeft:'0%'}}>
        <TouchableOpacity style={{width:width*0.57}}>
            <View style={{borderRadius: 8, paddingVertical: 10, paddingHorizontal: 10,backgroundColor: '#cc2b7e',}}>
            <Entypo name = 'trophy' size={30} style ={{marginTop: '-2%', marginLeft: '0%', color: '#ccc'}}/>
                <Text style={{color: '#ccc',fontSize: 16,textAlign: 'center', marginTop:'-14%', marginLeft:'18%'}}>
                    View Achievements
                </Text>
            </View>
        </TouchableOpacity>
    </View>
      {streak>=2?
      <View style={{marginTop:'-2%'}}>
        <Card style={{backgroundColor:'#cccccc'}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <CardItem style={{backgroundColor:'#cccccc'}}>
              <FontAwesome5 name ='gripfire' color='#c6690c' size={18}/>
              <View style={{marginRight:'2%'}}>

              </View>
              <Text> You have a {streak} day streak. Awesome!</Text>
            </CardItem>
          </View>
        </Card>
      </View>:<View>
        <Card style={{backgroundColor:'#cccccc'}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <CardItem style={{backgroundColor:'#cccccc'}}>
              
              
              <Text> You have a {streak} day streak. Keep going!</Text>
            </CardItem>
          </View>
        </Card>
      </View>}




      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <View style={{marginLeft:'7%'}}>
      <ProgressCircle
            percent={percPerc}
            radius={75}
            borderWidth={10}
            color="#cc2b7e"
            shadowColor="#ccc"
            bgColor="#e5e5e5"
            
        >
          <Text style={{ fontSize: 11 }}>Volunteering goal</Text>
            <Text style={{ fontSize: 18 }}>{percPerc+'%'}</Text>
            <Text style={{ fontSize: 11 }}>complete</Text>
            <View style={{marginTop:'5%'}}>

            </View>
            <TouchableOpacity height ='10' onPress={()=>setVis2(true)}>
            <View style={{borderRadius: 8, paddingVertical: 4, paddingHorizontal: 4,backgroundColor: '#cc2b7e',}}>
    
                <Text style={{color: 'white',fontSize: 12,textAlign: 'center', marginTop:'0%', marginLeft:'0%'}}>
                    Change Goal
                </Text>
                
            </View>
        </TouchableOpacity>

        </ProgressCircle>
        
      </View>
      <View style={{marginLeft:'9%', flex:1}}>
      <View style={{marginRight:'20%'}}>
        <Text style={{color:'#ddd'}}>
          Want to help out those in need due to the crisis?
        </Text>
      </View>
      <View style={{marginTop:'5%'}}></View>
      <View style ={{marginRight:'20%'}}>
      <TouchableOpacity height='10' onPress={loadInBrowser}>
            <View style={{borderRadius: 8, paddingVertical: 7, paddingHorizontal: 7,backgroundColor: '#cc2b7e',}}>
                
                <Text style={{color: '#ddd',fontSize: 18,textAlign: 'center',}} >
                    Donate Now
                </Text>
                
            </View>
        </TouchableOpacity>
        </View>
        </View>
        </View>
    </View>
  );
}