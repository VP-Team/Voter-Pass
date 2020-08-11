import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native'
import QRCode from '../components/QRCode';
import CustomHeader from '../components/CustomHeader';
import styles from '../Styling'

function HelpScreen({ route, navigation }) {
  
  return (
      <View style={styles.container}>
        <CustomHeader/>
        <Text style={styles.text}>Hello!!</Text>
       
      </View>
    )
  }


  export default HelpScreen;