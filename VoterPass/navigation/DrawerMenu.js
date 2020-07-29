import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider, Divider, Header } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import NewScreen from '../screens/NewVoterScreen';
import MainScreen from '../screens/MainScreen';
import ViewListScreen from '../screens/ViewListScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons';

const Drawer = createDrawerNavigator();


function DrawerMenu({ navigation }) {
    return(
        <Drawer.Navigator drawerType='slide' >
            <Drawer.Screen name='Home' component={MainScreen} />
            <Drawer.Screen name='New Voter' component={NewScreen} />
            <Drawer.Screen name='View List' component={ViewListScreen} />
            <Drawer.Screen name='Settings' component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerMenu;