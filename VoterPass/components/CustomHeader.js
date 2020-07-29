import React from 'react';
import { Navigation } from 'react-native-navigation'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    BackHandler
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider, Divider, Header } from 'react-native-elements';
import { DrawerMenu } from '../navigation/DrawerMenu';
//import { BackHandler } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';


function CustomHeader({ navigation }) {
    return (
        
            <Header name='CustomHeader'
            leftComponent={DrawerMenu}
            centerComponent={{ text: 'VOTERPASS', style: { color: '#fff' } }}
            />
    )
}


export default CustomHeader;