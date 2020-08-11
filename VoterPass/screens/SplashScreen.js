import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    ImageBackground,
    Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider, Header } from 'react-native-elements';
import HomeScreen from './HomeScreen';
import CustomHeader from '../components/CustomHeader';
import styles from '../Styling';


var bg=require('../VP BG.jpeg');
var logo=require('../VP Splash.mp4');
export default class Splash extends Component {
    render() {
        return(
            <ImageBackground
            source={bg}
            style={{height:'100%', width: '100%'}}
            >
                <View
                style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <Image source={logo}
                    style={{height:100, width:100}}></Image>
                </View>

            </ImageBackground>
        )
    }
}

