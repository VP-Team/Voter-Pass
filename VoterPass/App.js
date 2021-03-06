import { StatusBar } from 'expo-status-bar';
import * as SQLite from 'expo-sqlite';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { registerScreens } from './screens/Screens';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import NewVoterScreen from './screens/NewVoterScreen';
import ViewListScreen from './screens/ViewListScreen';
import SettingsScreen from './screens/SettingsScreen';
import FinalScreen from './screens/FinalScreen';
import QRCodeScannerScreen from './screens/QRCodeScanner';
import CustomHeader from './components/CustomHeader';

registerScreens();

const db = SQLite.openDatabase("voter.db");

const Stack = createStackNavigator();

//<Stack.Screen name="Drawer" component={DrawerMenu} />

function NavScreens() {
  return(
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="NewVoter" component={NewVoterScreen} />
        <Stack.Screen name="ViewList" component={ViewListScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Final" component={FinalScreen} />
        <Stack.Screen name="QRCodeScanner" component={QRCodeScannerScreen} />
      </Stack.Navigator>
  )
}

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Home'
      }
    },
  });
});

function App() {
  /* On render of app component, voter table in database will be created if it does not exist */
  React.useEffect(() => {
    db.transaction(tx => {
      //tx.executeSql("DROP TABLE IF EXISTS VOTER");
      tx.executeSql("CREATE TABLE IF NOT EXISTS VOTER (id text primary key not null, time int, check_in integer);");
    });
  }, [])
  //const scheme = useColorScheme();
  const devFlag = Expo.Constants.manifest.dev_flag
    if (devFlag){
      //Load some testing data
    } 
  return (
    <NavigationContainer>
      <NavScreens/>
    </NavigationContainer>
  )
}

export default App;