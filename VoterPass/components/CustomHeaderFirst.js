import React from 'react';
import { Navigation } from 'react-native-navigation'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    BackHandler
} from 'react-native';
import { Button, ThemeProvider, Divider, Header } from 'react-native-elements';
import { DrawerMenu } from '../navigation/DrawerMenu';
import { HeaderBackButton } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
//import { mdiArrowLeftBoldOutline } from '@mdi/js';


function CustomHeader() {
    const navigation = useNavigation();

    return (
            <Header name='CustomHeader'
            centerComponent={{ text: 'VOTER PASS', style: { color: '#fff' } }}
            rightComponent={{ 
            icon: 'home', 
            color: 'white',
            onPress: () => navigation.navigate('Main')
            }}
            />
    )
}


export default CustomHeader;