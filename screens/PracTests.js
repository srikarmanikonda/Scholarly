import React, {Component, useState, useRef, useEffect} from 'react';
import { View, StatusBar, StyleSheet, ActivityIndicator, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Dimensions, AsyncStorage, KeyboardAvoidingView, Share } from 'react-native';
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
import { AntDesign,FontAwesome, Octicons, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, Ionicons } from 'react-native-vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;



export default function PracTests({ navigation }) {
    const navBack = () => {
        navigation.navigate('TestingResources')
    }
    return(
        <View style ={{backgroundColor:'blue'}}>
            <Text style={{fontSize:100}} onPress = {navBack}>Back!</Text>
        </View>
    )
}