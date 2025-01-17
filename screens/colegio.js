import React,{useRef} from "react";
import { FlatList, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, View, Image, Alert, TouchableHighlight, Linking , SafeAreaView,StatusBar} from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";
import Swipeable from 'react-native-swipeable-row';
import { SearchBar } from 'react-native-elements';
import moment from "moment";
import * as WebBrowser from 'expo-web-browser';
import { AntDesign } from 'react-native-vector-icons'
import * as Font from 'expo-font';


const entireScreenHeight = Dimensions.get('window').height;
const rem = entireScreenHeight / 380;
const entireScreenWidth = Dimensions.get('window').width;
const wid = entireScreenWidth / 380;
let first = true;
let first2 = true;

var  predata  = [{
    name: "CLC",
    id: "1",
    link: "https://www.clcillinois.edu/",
    description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\nAcceptance Rate: 95+%\nIn-person, hybrid, or remote: Hybrid\nAverage ACT/SAT score: N/A\n",
    appdeadline:"12/19/20"
  },{
    name: "Arizona State University",
    id: "2",
    link: "https://admission.asu.edu/apply",
    description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\nAcceptance Rate: 88%\nIn-person, hybrid, or remote: Hybrid\nAverage ACT/SAT score: 22/1050\n",
    appdeadline:"12/20/20"
  },
  {
    name: "Ohio State University",
    id: "3",
    link: "https://www.osu.edu/",
    description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\nAcceptance Rate:95+%\nIn-person, hybrid, or remote: Hybrid\nAverage ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },
  {
    name: "Harvard University",
    id: "4",
    link: "https://college.harvard.edu/admissions/apply",
    description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\n Acceptance Rate:5%\nIn-person, hybrid, or remote: Hybrid\nAverage ACT/SAT score: 34/1490\n",
    appdeadline:"12/20/20"
  },
  {
    name: "Northwestern University",
    id: "5",
    link: "https://www.northwestern.edu/",
    description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): Y\nAcceptance Rate:%\n In-person, hybrid, or remote: Remote\n Average ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },
  {
    name: "University of Illinois at Urbana-Champaign",
    id: "6",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\n Acceptance Rate: 95+%\nIn-person, hybrid, or remote: Hybrid\nAverage ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },
  {
    name: "Benedictine University",
    id: "7",
    link: "https://www.ben.edu//",
    description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\n Acceptance Rate: 62.%\n In-person, hybrid, or remote: In-person\n Average ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },

  {
    name: "Purdue University",
    id: "8",

        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
     description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\n Acceptance Rate: 58%\n In-person, hybrid, or remote: Remote\n Average ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },

  {
    name: "Stanford University",
    id: "9",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
     description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\n Acceptance Rate:4.8%\n In-person, hybrid, or remote: Hybrid\n Average ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },
  {
    name: "University of Michgan",
    id: "10",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
     description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): Y\n Acceptance Rate: 22.8%\nIn-person, hybrid, or remote: Hybrid\nAverage ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },
  {
    name: "Illinois State University",
    id: "11",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
     description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\n Acceptance Rate: 89.2%\n In-person, hybrid, or remote: Remote\n Average ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },
  {
    name: "Michigan State University",
    id: "12",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
     description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): Y\n Acceptance Rate: 78%\n In-person, hybrid, or remote: Hybrid\n Average ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },
  {
    name: "Case Western Reserve University",
    id: "13",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
     description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\n Acceptance Rate:29.3%\n In-person, hybrid, or remote: Hybrid\n Average ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },


  {
    name: "Yale University",
    id: "15",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
     description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): Y\n Acceptance Rate: 6.3%\nIn-person, hybrid, or remote: Remote\nAverage ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },
  {
    name: "Auburn University",
    id: "16",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
     description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\n Acceptance Rate: 75.4%\nIn-person, hybrid, or remote: Hybrid\n Average ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },
  {
    name: "Iowa State University",
    id: "17",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
     description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): Y\n Acceptance Rate: 91%\n In-person, hybrid, or remote: In-person\n Average ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },
  {
    name: " University of Alabama",
    id: "18",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

     description: "Updated COVID-19 Requirements for 2020-2021: ACT/SAT required (y/n): N\nLetters of recommendation required (y/n): N\n Acceptance Rate: 59%\n In-person, hybrid, or remote: Hybrid\n Average ACT/SAT score: N/A\n",
    appdeadline:"12/20/20"
  },]

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
      loaded:false
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
    console.log( fullData);
    this.state.data = fullData;
};

     one = async (item) => {
       let result = await WebBrowser.openBrowserAsync(item.link);
     }



  _renderItem = ({ item }) => {
    const rightButtons = [
      <TouchableHighlight style={{ backgroundColor: '#add8e6', height: '100%', justifyContent: 'center', }} onPress={() => this.one(item)}><Text style={{fontFamily:'FontBest', color: 'white', paddingLeft: entireScreenHeight / 30 }}>View Website</Text></TouchableHighlight>,
    ];
    if (item.header) {

      return (

        <ListItem itemDivider >
          <Body style={{ marginRight: 0, alignItems: 'center' }}>
            <Text style={{fontFamily:'FontBest'}}>
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
          <ListItem style={{ marginLeft: 0, backgroundColor: 'transparent' }}>
            <Body>
              <Text style={{fontFamily:'FontBestBold', flex: 1, color: 'black' }}>{item.name}</Text>
              <Text style={{fontFamily:'FontBest', flex: 1, color: 'black' }}>{item.description} </Text>
              <Text style={{fontFamily:'FontBest', flex: 1, color: 'black' }}>{item.deadline} </Text>
            </Body>
          </ListItem>
        </Swipeable >


      );
    }
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
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

<StatusBar hidden/>
          <View style={styles.navBar}>
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


          <ImageBackground source={require('../assets/login.png')} style={styles.image}>

            <View style={{ flex: 1, width: '90%', alignItems: 'center' }}>
              </View>
            <View style={{ width: '100%', flex: 8 }}>
            <View style={{marginTop:entireScreenHeight*0.0}}>

</View>
              <FlatList style={{ width: '100%',height:"100%",marginTop:"-18.3%" }}

                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={this.renderHeader}

                scrollEnabled={!this.state.isSwiping}
              // stickyHeaderIndices={this.state.stickyHeaderIndices}
              />
            </View>


            {/* <View style={{
              width: '73%',
              flex: 1,
              paddingBottom: '1%',
              paddingTop: '1%',
              justifyContent: 'center',
              alignItems: 'center'

            }}> */}
              {/* <TouchableOpacity
                style={{
                  flex: 1,
                  width: entireScreenHeight / 8 * 0.96,
                }}
                onPress={onPress}
                disabled={this.state.loading}

              >

              </TouchableOpacity> */}
            {/* </View> */}
          </ImageBackground>
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
    height: entireScreenHeight*0.14,
    width: '100%',
    backgroundColor: '#00bdeb',
    elevation:20,
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
