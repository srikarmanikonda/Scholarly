import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView } from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
//const wi
export default class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    loading: false,
  };
  constructor() {
    super();
    Text.defaultProps = Text.defaultProps || {};
    // Ignore dynamic type scaling on iOS
    Text.defaultProps.allowFontScaling = false;

  }
  render(){

return (
      <View style={styles.container}>
          <View style={{ width: '100%', height: '80%', alignItems: 'flex-end' }}>
            <View style={{
              width: '100%',
              flex: 1.5,
              borderColor: '#3C5984',
              borderWidth: 2,
              borderRadius: 20,
            }}>
              <TextInput                style={{ fontSize: 18 * rem, width: '95%', height: '100%', marginLeft: '5%', fontFamily: 'SourceL' }}
                autoCapitalize='none'
                autoCompleteType='off'
                placeholder="Username"
                keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'}
                onChangeText={(value) => this.setState({ username: value })}
                value={this.state.username}

              /></View>
            <View style={{ width: '100%', flex: 0.4 }}></View>
            <View style={{
              width: '100%',
              flex: 1.5,
              borderColor: '#3C5984',
              borderWidth: 2,
              borderRadius: 20
            }}>
              <TextInput
                style={{ fontSize: 18 * rem, width: '95%', height: '100%', marginLeft: '5%', fontFamily: 'SourceL' }}
                autoCapitalize='none'
                autoCompleteType='off'
                placeholder="Password"
                onChangeText={(value) => this.setState({ password: value })}
                value={this.state.password}
                secureTextEntry={true}

              />
              </View>

          </View>
        </View>
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
});
