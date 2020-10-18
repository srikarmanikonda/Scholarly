import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Text, View, StatusBar, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { AntDesign,FontAwesome, Octicons, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';
import { AppLoading } from 'expo';

const entireScreenHeight = Dimensions.get('window').height;
const rem = entireScreenHeight / 380;
const entireScreenWidth = Dimensions.get('window').width;
const wid = entireScreenWidth / 380;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    Text.defaultProps = Text.defaultProps || {};
    // Ignore dynamic type scaling on iOS
    Text.default
  }


  one = async () => {
    let result = await WebBrowser.openBrowserAsync('https://healthy.kaiserpermanente.org/oregon-washington/health-wellness/mental-health/tools-resources/stress-management');
  }
  two = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.mentalhealth.gov/');
  }
  three = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.nhlbi.nih.gov/health/educational/wecan/get-active/activity-plan.htm');
  }
  four = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.fec.gov/data/elections/?state=&cycle=2020&election_full=true');
  }




render(){
    const {navigate} = this.props.navigation;

    //MAKE SURE U HAVE THIS IF STATEMENT

    //end
    return (
      <View style={styles.container}>
      <LinearGradient
   colors = {['#54C7E0','#3090D5','#337CD1','#00CEFC']}
   style={{
             position: 'absolute',
             left: 0,
             right: 0,
             top: 0,
             height:"100%",
           }}
           />
          
          <View style={{ alignItems: 'center', height: '50%' }}>
          
           <View style={{flexDirection:'row'}}>
           <TouchableOpacity onPress={()=>navigate('HomeScreen')} style={{marginTop:entireScreenHeight*-0.18}}>
           <AntDesign name='arrowleft' size ={25} color='white'/>
           </TouchableOpacity>
            <Text style={{fontWeight:'bold', fontSize: Math.min(32.5 * rem, 34.5 * wid), color: 'white', top: entireScreenWidth * -0.35, right: entireScreenWidth * 0.01 }}> Wellness Resources</Text>
            </View>

            <TouchableOpacity
              style={styles.login}
              onPress={() => this.one()}>
              <Text style={{fontWeight:'bold', fontSize: Math.min(12.5 * rem, 21.5 * wid), color: 'white', top: entireScreenWidth * 0.07, right: entireScreenWidth * 0.01 }}>Mental Health</Text>
              <Image style={{ width: '80%', height: '80%', right: entireScreenWidth * -0.31, top: entireScreenWidth * -0.03 }} source={require('../assets/mental.png')} resizeMode='contain'></Image>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.login2}
              onPress={() => this.two()}>
              <Text style={{fontWeight:'bold', fontSize: Math.min(9.5 * rem, 17.5 * wid,), color: 'white', top: entireScreenWidth * 0.07 }}>Physical Health at Home</Text>
              <Image style={{ width: '80%', height: '80%', right: entireScreenWidth * -0.31, top: entireScreenWidth * -0.03 }} source={require('../assets/physical.png')} resizeMode='contain'></Image>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.login3}
              onPress={() => this.three()}>
              <Text style={{fontWeight:'bold', fontSize: Math.min(10.5 * rem, 19.5 * wid), color: 'white', top: entireScreenWidth * 0.07 }}>  E-learning Wellness</Text>
              <Image style={{ width: '80%', height: '80%', right: entireScreenWidth * -0.33, top: entireScreenWidth * -0.03 }} source={require('../assets/studnetwell.png')} resizeMode='contain'></Image>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.login4}
              onPress={() => this.four()}>
              <Text style={{fontWeight:'bold', fontSize: Math.min(8.5 * rem, 15 * wid), color: 'white', top: entireScreenWidth * 0.07 }}>Social and Isolation Text Line </Text>
              <Image style={{ width: '80%', height: '80%', right: entireScreenWidth * -0.33, top: entireScreenWidth * -0.03 }} source={require('../assets/studnetwell.png')} resizeMode='contain'></Image>

            </TouchableOpacity>
          </View>

      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerTextStyle: {
    color: '#FFF',
    top: 60
  },
  login: {
    width: entireScreenWidth * 0.8,
    backgroundColor:  "#3773BB",
    borderRadius: 25,
    height: entireScreenHeight * 0.09,
    alignItems: "center",
    justifyContent: "center",
    top: entireScreenHeight * -0.12
  },
  login2: {
    width: entireScreenWidth * 0.8,
    backgroundColor: "#3773BB",
    borderRadius: 25,
    height: entireScreenHeight * 0.09,
    alignItems: "center",
    justifyContent: "center",
    top: entireScreenHeight * 0.22
  },
  login3: {
    width: entireScreenWidth * 0.8,
    backgroundColor: "#3773BB",
    borderRadius: 25,
    height: entireScreenHeight * 0.09,
    alignItems: "center",
    justifyContent: "center",
    top: entireScreenHeight * -0.09
  },
  login4: {
    width: entireScreenWidth * 0.8,
    backgroundColor: "#3773BB",
    borderRadius: 25,
    height: entireScreenHeight * 0.09,
    alignItems: "center",
    justifyContent: "center",
    top: entireScreenHeight * 0.25
  }
});
