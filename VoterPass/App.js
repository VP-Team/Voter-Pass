import { StatusBar } from 'expo-status-bar';
import * as SQLite from 'expo-sqlite';
import React from 'react';
import { StyleSheet, Text, View, Button, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { registerScreens } from './screens/Screens';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './screens/HomeScreen';
import NextScreen from './screens/NextScreen';
import NewScreen from './screens/NewScreen';
import ScanScreen from './screens/ScanScreen';
import ManualScreen from './screens/ManualScreen';
import ViewListScreen from './screens/ViewListScreen';
import SettingsScreen from './screens/SettingsScreen';
import FinalScreen from './screens/FinalScreen';
import QRCodeScannerScreen from './screens/QRCodeScanner';
//import { Button } from './components/Button'

registerScreens();

const db = SQLite.openDatabase("voter.db");

const Stack = createStackNavigator();

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
      tx.executeSql("DROP TABLE IF EXISTS VOTER");
      tx.executeSql("CREATE TABLE IF NOT EXISTS VOTER (id text primary key not null, time text);");
    });
  }, [])
  //const scheme = useColorScheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Next" component={NextScreen} />
        <Stack.Screen name="New" component={NewScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Manual" component={ManualScreen} />
        <Stack.Screen name="ViewList" component={ViewListScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Final" component={FinalScreen} />
        <Stack.Screen name="QRCodeScanner" component={QRCodeScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;