import React, {Component, useState, useEffect} from 'react';
import { View, StatusBar, FlatList, Linking, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView, Alert, Share } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {LinearGradient} from 'expo-linear-gradient'
import { Camera } from 'expo-camera'
import Logo from '../assets/Group_1_copy.png'
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import { Button, Image, ListItem } from 'react-native-elements'
import ProgressCircle from 'react-native-progress-circle'
import * as Font from 'expo';
import { AppLoading } from 'expo';

import { AntDesign,FontAwesome, Octicons, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Prompt from 'react-native-input-prompt'
import { Card, CardItem } from 'native-base'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
console.disableYellowBox = true;

var interestedColls = [{
  name: 'Northwestern University',
  key: 0
},
{
  name: 'Harvard University',
  key: 1
}
]

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
var sad='#fff'
var neu='#fff'
var hap='#fff'

var name = 'Andrew Tikhonov'
var goal = 2

var hours = 1

var percentage=(hours/goal)*100
var streak = 10;
var userDesc='I am currently a student at Vernon Hills High School and in my spare time enjoy programming and playing tennis.'
var x = 1.5

const fetchFonts = () => {
  return Font.loadAsync({
          'FontBest': require('../assets/fonts/Commissioner-Medium.ttf')
  })
}

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


  const navHome = () => {
    navigation.navigate('HomeScreen')
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

  const [loaded, setLoaded] = useState(false);

  if (!loaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setLoaded(true)} onError={(err)=>console.log(err)}/>
}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:x+'%' }}>

      <StatusBar hidden/>
      <LinearGradient
   colors = {['#54C7E0','#3090D5','#337CD1','#00CEFC']}
   style={{
             position: 'absolute',
             left: 0,
             right: 0,
             top: 0,
             height:height,
             marginTop:'-1.5%'
           }}
           />
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
      <TouchableOpacity onPress={navHome}>
        <AntDesign name='arrowleft' size={25} style={{color:'white', marginRight:'75%', marginTop:height*0.04, marginBottom:height*0.03}}/>
        </TouchableOpacity>
        <Octicons name='gear' size={0} style={{color:'white'}} />
        

      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:'0%'}}>

        <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'center' }}>
          {image && <Image source={{ uri: image }} style={{ width: 140, height: 140, borderRadius:70, overflow:"hidden"}} />}
          <View style={{marginTop:'3%'}} >
          </View>
          <TouchableOpacity onPress={pickImage}>
            <MaterialIcons name = 'switch-camera' size = {25} style={{color:'#fff'}}/>
          </TouchableOpacity>
        </View>
        <View style={{marginRight: '2%'}} >
        </View>
        <View style={{flex: 1, marginTop:'10%'}}>

          <Text style={{fontFamily: 'FontBest', color: '#fff', fontSize:22, marginTop: '-25%', marginLeft: '-5%', marginRight:'5%'}}>
            {name}
          </Text>

          <Text style={{fontFamily: 'FontBest', color: '#fff', fontSize:12.5, marginTop: '0%', marginLeft: '-5%'}}>

              {desc}
          </Text>
          <View style={{marginLeft:'-5%'}}>
          <TouchableOpacity onPress={()=>{setVis(true)
          }}>
            <Feather name = 'edit' size = {22} style={{color:'#fff', marginTop:'5%', marginLeft:'0%'}}/>
          </TouchableOpacity>
          </View>

        </View>
      </View>
      <View style={{marginBottom:height*0.03}}>

      </View>
      <View style={{alignItems:'center', marginBottom:height*0.04}}>
          <View style={{alignItems:'center'}}>
            <Text style={{fontFamily: 'FontBest', fontSize:17, color: '#fff'}} >
              How are you today?
            </Text>
          </View>
          <View style ={{flexDirection:'row', alignItems:'center', marginTop:'3%', marginRight:'0%'}}>
            <TouchableOpacity onPress={()=>{setSad('#cd3737')
            setNeu('#fff')
            setHap('#fff')
            sad='#cd3737'
            neu='#fff'
            hap='#fff'}}>
            <Entypo name ='emoji-sad' style={{color:sadColor, marginRight:'3%'}} size = {45} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setNeu('#cdbe37')
            setSad('#fff')
            setHap('#fff')
            neu='#cdbe37'
            hap='#fff'
            sad='#fff'
            }}>
            <Entypo name ='emoji-neutral' style={{color:neuColor, marginRight:'3%'}} size = {45} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{setHap('#37cd8a')
          setSad('#fff')
          setNeu('#fff')
          hap='#37cd8a'
          neu='#fff'
          sad='#fff'}}>
            <Entypo name ='emoji-happy' style={{color:hapColor, marginRight:'0%'}} size = {45}/>
          </TouchableOpacity>
          </View>
      </View>
      
      {streak>=2?
      <View style={{marginTop:'-2%'}}>
        <Card style={{backgroundColor:'#3090D5'}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <CardItem style={{backgroundColor:'#3090D5'}}>
              <FontAwesome5 name ='gripfire' color='#fff' size={18}/>
              <View style={{marginRight:'2%'}}>

              </View>
              <Text style={{fontFamily: 'FontBest', color:'white'}} > You have a {streak} day streak. Awesome!</Text>
            </CardItem>
          </View>
        </Card>
      </View>:<View>
        <Card style={{backgroundColor:'#3090D5'}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <CardItem style={{backgroundColor:'#3090D5'}}>


              <Text style={{fontFamily: 'FontBest', color:'white'}} > You have a {streak} day streak. Keep going!</Text>
            </CardItem>
          </View>
        </Card>
      </View>}

      <Text style={{fontFamily: 'FontBest', marginBottom: height*0.02, color: 'white'}}>
      __________________________________________
      </Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontFamily: 'FontBest', marginBottom: height*0.02, color: 'white'}}>
      Your college watchlist:
      </Text>
      <View style={{marginRight:width*0.02}}>

      </View>
      <TouchableOpacity onPress={()=>console.log('add to watchlist')}>
      <Ionicons name='ios-add-circle-outline' size={25} style={{color:'white', marginTop:height*-0.002}}/>
      </TouchableOpacity>
      </View>

      
      <FlatList data={interestedColls} renderItem={({ item })=>(
                 <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Card >
                    <CardItem style={{backgroundColor: '#fff', width:width*0.8}}>
                        
                        <Text style={{fontFamily: 'FontBest', fontSize:16, color:'#3090D5'}}>
                            {item.name}
                        </Text>

                    </CardItem>
                        
                
                </Card>
                </View>
             )} />
     
<View style={{marginBottom:height*0.04}}>

</View>
      


  
    </View>
  );
}


/* <View style={{marginTop:'0%', marginBottom:'-0%',marginLeft:'0%'}}>
        <TouchableOpacity style={{width:width*0.57}}>
            <View style={{borderRadius: 8, paddingVertical: 10, paddingHorizontal: 10,backgroundColor: '#',}}>
            <Entypo name = 'trophy' size={30} style ={{marginTop: '-2%', marginLeft: '0%', color: '#fff'}}/>
                <Text style={{fontFamily: 'FontBest', color: '#fff',fontSize: 16,textAlign: 'center', marginTop:'-14%', marginLeft:'18%'}}>
                    View Achievements
                </Text>
            </View>
        </TouchableOpacity>
    </View> */


/* <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <View style={{marginLeft:'7%'}}>
      <ProgressCircle
            percent={percPerc}
            radius={75}
            borderWidth={10}
            color="#cc2b7e"
            shadowColor="#fff"
            bgColor="#e5e5e5"

        >
          <Text style={{fontFamily: 'FontBest',  fontSize: 11 }}>Volunteering goal</Text>
            <Text style={{fontFamily: 'FontBest',  fontSize: 18 }}>{percPerc+'%'}</Text>
            <Text style={{fontFamily: 'FontBest',  fontSize: 11 }}>complete</Text>
            <View style={{marginTop:'5%'}}>

            </View>
            <TouchableOpacity height ='10' onPress={()=>setVis2(true)}>
            <View style={{borderRadius: 8, paddingVertical: 4, paddingHorizontal: 4,backgroundColor: '#cc2b7e',}}>

                <Text style={{fontFamily: 'FontBest', color: 'white',fontSize: 12,textAlign: 'center', marginTop:'0%', marginLeft:'0%'}}>
                    Change Goal
                </Text>

            </View>
        </TouchableOpacity>

        </ProgressCircle>

      </View>
      <View style={{marginLeft:'9%', flex:1}}>
      <View style={{marginRight:'20%'}}>
        <Text style={{fontFamily: 'FontBest', color:'#fff'}}>
          Want to help out those in need due to the crisis?
        </Text>
      </View>
      <View style={{marginTop:'5%'}}></View>
      <View style ={{marginRight:'20%'}}>
      <TouchableOpacity height='10' onPress={loadInBrowser}>
            <View style={{borderRadius: 8, paddingVertical: 7, paddingHorizontal: 7,backgroundColor: '#cc2b7e',}}>

                <Text style={{fontFamily: 'FontBest', color: '#fff',fontSize: 18,textAlign: 'center',}} >
                    Donate Now
                </Text>

            </View>
        </TouchableOpacity>
        </View>
        </View>
        </View> */