import React,{useRef} from "react";
import { FlatList, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, View, Image, Alert, TouchableHighlight, Linking , SafeAreaView,StatusBar} from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";
import Swipeable from 'react-native-swipeable-row';
import { SearchBar } from 'react-native-elements';
import moment from "moment";
import {LinearGradient} from 'expo-linear-gradient'
import { AntDesign } from 'react-native-vector-icons'
import * as Font from 'expo-font';


const entireScreenHeight = Dimensions.get('window').height;
const rem = entireScreenHeight / 380;
const entireScreenWidth = Dimensions.get('window').width;
const wid = entireScreenWidth / 380;
let first = true;
let first2 = true;

var  predata  = [{
  name: "Order Sons of Italy in America National Leadership Grant",
  id: "100",
  link: "https://www.osia.org/students/scholarships.php",
  description: " $25,000  Applicant must be of Italian heritage and be a full-time student attending or planning on attending an accredited four-year institution who has demonstrated exceptional leadership qualities and a distinguished level of scholastic achievement. Recipients will be officially recognized in May at the SIF's National Education & Leadership Awards (NELA) Gala in Washington, DC. Monetary awards are presented directly to students' academic institutions in accordance with eligibility requirements.",
  deadline:" February 28 "
},{
  name: "Agnes Jones Jackson Scholarship",
  id: "300",
  link: "https://www.naacp.org/",
  description: " $2,500  Applicant must be current member of the NAACP and must not have reached the age of 25 by the application deadline. Applicant must be a citizen of the United States and be enrolled in an accredited college or university in the United States. Undergraduate students must be full-time with a GPA of at least 2.5 (C+). Graduate students may be full or part-time with a GPA of 3.0 (B). Applicant must demonstrate financial need. Renewal of the Agnes Jones Jackson Scholarship is competitive. Please refer to the NAACP National Website or call the NAACP National Education Department at 410 580-5760 for more information.",
  deadline:" March 31 "
},{
  name: "Fellowship in Jewish Studies",
  id: "400",
  link: "http://www.mfjc.org/support/howto.html",
  description: " $10,000  Applicant must have an interest in Jewish studies. Award is to assist well-qualified individuals in carrying out an independent scholarly, literary, or art project, in a field of Jewish specialization which makes a significant contribution to the understanding, preservation, enhancement, or transmission of Jewish culture.",
  deadline:" October 31 "
},{
  name: "Billy Smith Memorial Scholarship",
  id: "500",
  link: "https://www.scholarships.com/financial-aid/college-scholarships/sports-scholarships/baseball-scholarships/billy-smith-memorial-scholarship/#",
  description: " The Billy Smith Memorial Scholarship provides educational resources for graduation high school baseball or softball players who intend to pursue a sports-related college degree. Applicant must be a graduating high school senior, reside in Winnebago, Boone, Ogle or Stephenson County, have played at least three years of baseball or softball in high school, including senior year, must major in a sports-related field in college, and must have a minimum GPA of 3.0. For more information or to apply, please visit the scholarship provider's website. ",
  deadline:"February 01 "
},{
  name: "Oratorical Speech Scholarship Contest",
  id: "600",
  link: "http://www.mfjc.org/support/howto.html",
  description: " $1000  Applicant must be a finalist in the oratorical contest.",
  deadline:"First Week of January"
},{
  name: "Verne R. Dapp Memorial Scholarship",
  id: "700",
  link: "https://www.ans.org/",
  description: " $3,000 Applicant must be a U.S. citizen or permanent resident enrolled in a course of study relating to a degree in nuclear science and technology. Applicant must be sponsored by an ANS local section, division, student branch, committee member or organization member.",
  deadline:" February 1 "
},{
  name: "Dental Student Scholarships",
  id: "800",
  link: "http://www.mfjc.org/support/howto.html",
  description: " $2,500  Applicant must be a U.S. citizen and have a minimum 3.0 GPA. Selection is based upon financial need, academic achievement, and personal and professional goals. Two reference forms from two dental school representatives (i.e., professor or academic advisor) in support of the application must be submitted as part of the application form.",
  deadline:" November 11 "
},{
  name: "Navy Supply Corps Foundation Scholarship",
  id: "900",
  link: "https://www.usnscf.com/Foundation/pages/Programs/Scholarship",
  description: " $2,500  Applicant must be the child of a Navy Supply Corps Officer (including Warrant) or associated supply enlisted ratings on active duty, in reserve status, retired-with-pay, or deceased, and have a minimum 3.0 GPA. Selection is based upon scholastic ability, character, leadership, and financial need.",
  deadline:" April 10 "
},{
  name: "Sarah Bradley Tyson Memorial Fellowship",
  id: "950",
  link: "https://wnfga.org/scholarships/fellowships/",
  description: " $1,000   Applicant must be a U.S. citizen and have a minimum 3.0 GPA. Selection is based upon financial need, academic achievement, and personal and professional goals. Two reference forms from two dental school representatives (i.e., professor or academic advisor) in support of the application must be submitted as part of the application form.",
  deadline:"January 20"
},{
  name: "Suburban Hospital Casey Scholarships",
  id: "970",
  link: "https://www.hopkinsmedicine.org/suburban_hospital/about_the_hospital/careers/education_career_development.html",
  description: " $1,000 Applicant must be a current employee who is enrolled in a nursing or allied health (e.g. radiology technology, respiratory therapy, medical technology, physical therapy, physical therapy assistant, occupational therapy, or physician assistant) undergraduate program or a non-employee who is enrolled in a nursing program leading to a B.S.N. or higher. Minimum 2.5 GPA, two letters of recommendation, transcript, and letter of acceptance/good standing required. Award requires a work commitment at Suburban Hospital in Bethesda, MD, upon completion of degree program.",
  deadline:"November 30; April 30"
}]


var fullData=  [];


export default class App extends React.Component {

  constructor() {
    super();
    Text.defaultProps = Text.defaultProps || {};
    // Ignore dynamic type scaling on iOS
    Text.defaultProps.allowFontScaling = false;
    this.state = {
      data: predata,
      spinner: false,
      search: '',
      loaded: false
    };
  }

  _loadFontsAsync = async () => {
    let isLoaded = await Font.loadAsync({
      FontBest: require("../assets/fonts/Commissioner-Light.ttf"),
      FontBestBold: require("../assets/fonts/Commissioner-Bold.ttf"),
    });
    this.setState({ loaded: true });
  };

  componentDidMount() {
    this._loadFontsAsync();
  }

  updateSearch = (search) => {
      fullData = []

    this.setState({ search });
    predata.forEach((datas) =>
    {
        for (let x in datas) {
            if(datas[x].includes(search))
            {
                fullData.push(datas)
                break;
            }
          }
    });
    //console.log( fullData);
    console.log(predata);
    this.state.data = fullData;

};

   edit(item){


      Linking.openURL(item.link);

  }

  _renderItem = ({ item }) => {
    const rightButtons = [
      <TouchableHighlight style={{ backgroundColor: '#add8e6', height: '100%', justifyContent: 'center', }} onPress={() => this.edit(item)}>
      <Text style={{fontFamily:'FontBestBold',  color: 'black', paddingLeft: entireScreenHeight / 30 }}>Apply</Text>

  </TouchableHighlight>,

    ];
    if (item.header) {

      return (

        <ListItem itemDivider >
          <Body style={{ marginRight: 0, alignItems: 'center' }}>
            <Text style={{fontFamily:'FontBestBold',  }}>
             {moment(item.date, 'MM-DD-YYYY').format('MMMM Do, YYYY')}
            </Text>
          </Body>
        </ListItem>
      );

    }
    else {
      var f = false
      if (first) {
        f = true;
        first = false;
      }
      return (
        <Swipeable rightButtons={rightButtons} rightButtonWidth={entireScreenWidth / 5} bounceOnMount={f}>
          <ListItem style={{ marginLeft: 0, backgroundColor: 'transparent' , elevation: 5}}>
            <Body>
              <Text style={{fontFamily:'FontBestBold', flex: 1, color: 'black' }}>{item.name}</Text>
              <Text style={{fontFamily:'FontBest',  flex: 1, color: 'black' }}>{item.description} </Text>
              <Text style={{fontFamily:'FontBest',  flex: 1, color: 'black' }}>{item.deadline} </Text>
            </Body>
          </ListItem>
        </Swipeable >


      );
    }
  };

  renderHeader = () => {
    const { search } = this.state;

    return <SearchBar
    placeholder="Type Here..."
    onChangeText={this.updateSearch}
    value={search}
  />;
  };
  static navigationOptions = { headerMode: 'none', gestureEnabled: false };


  render() {
    //// console.log(global.drives)
    const onPress = () => {
      this.props.navigation.navigate('HomeScreen')
    }
  //  // console.log(JSON.stringify(global.drives))
    const entireScreenHeight = Dimensions.get('window').height;
    const rem = entireScreenHeight / 380;
    const entireScreenWidth = Dimensions.get('window').width;
    const wid = entireScreenWidth / 380;
    var ree;
    

    if (entireScreenWidth >= 0.92 * entireScreenHeight * 4 / 9 * 1524 / 1200) {
      ree = rem;
    }
    else {
      ree = 1.75 * wid;
    }

    if (!this.state.loaded) {
      return (
      <View>
        <StatusBar hidden />
      </View>)
    }

      return (

        <View style={styles.container}>


        <LinearGradient
   colors = {['#54C7E0','#3090D5','#337CD1','#00CEFC']}
   style={{
             position: 'absolute',
             left: 0,
             right: 0,
             top: 0,
             height:entireScreenHeight,
           }}
           />

<View style={styles.navBar}>
  <StatusBar hidden/>
          <TouchableOpacity

                onPress={onPress}
                disabled={this.state.loading}
              >
                <AntDesign name='arrowleft' color='white' size={35} style={{marginLeft: entireScreenWidth*0.03}}/>
                {/* <Image source={require('../assets/logout.png')} style={{
                  height: 60,
                  width: 60,
                }}></Image> */}

              </TouchableOpacity>
              <Image source={require('../assets/mainlogo.png')} style={{
                  height: 50,
                  width: 50,
                  marginRight:140
                }}></Image>

        </View>

            <View style={{ flex: 1, width: '90%', alignItems: 'center' }}>
              </View>
            <View style={{ width: '100%', flex: 6 }}>
              <FlatList style={{ width: '100%' }}
                  marginTop ={'-24%'}

                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={this.renderHeader}

                scrollEnabled={!this.state.isSwiping}
              // stickyHeaderIndices={this.state.stickyHeaderIndices}
              />
            </View>


            <View style={{
              width: '73%',
              flex: 1,
              paddingBottom: '2%',
              paddingTop: '2%',
              justifyContent: 'center',
              alignItems: 'center'

            }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: entireScreenHeight / 8 * 0.96,
                }}
                onPress={onPress}
                disabled={this.state.loading}

              >

              </TouchableOpacity>
            </View>
        </View>
      );
    }

}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0, top: 0, position: 'absolute'

  },
  navBar: {
    height: '14%',
    width: '100%',
    backgroundColor: '#3090D5',
    elevation:40,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
  },
  imagefront: {
    marginTop: '8%',
    height: '25%',
    width: '80%',
    flex: 2,

  },
  spinnerTextStyle: {
    color: '#FFF',
    top: 60
  },

});
