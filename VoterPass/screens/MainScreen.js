import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider, Header } from 'react-native-elements';
import HomeScreen from './HomeScreen';
import CustomHeader from '../components/CustomHeader';
import styles from '../Styling';


function MainScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <CustomHeader/>
        <Text style={styles.text}>Menu</Text>
        <StatusBar style="auto" />
        <Button 
        title="New Voter"
        style={styles.button}
        onPress={() => navigation.navigate('New')}
        />
        <Button 
        title="View List"
        style={styles.button}
        onPress={() => navigation.navigate('View List')}
        />
        <Button 
        title="QR Scanner"
        onPress={()=> navigation.navigate('QRCodeScanner')}
        />
        <Button 
        title="List Settings"
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
        />
        <Button 
        title="Help"
        onPress={() => navigation.navigate('Help')}
        />
      </View>
    )
  }

  export default MainScreen;