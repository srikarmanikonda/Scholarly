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
    name: "Srikar Manikonda $1000 grant",
    id: "100",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: " $1000 to the person that can draw the best portrait of mr. healey",
    deadline:"today"
  },{
    name: "test",
    id: "300",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: " test",
    deadline:"tommorrow"
  },{
    name: "hello",
    id: "9999",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: " stahp",
    deadline:"tommorrow"
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
      <Text style={{fontFamily:'FontBestBold',  color: 'blue', paddingLeft: entireScreenHeight / 30 }}>Apply</Text>

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
