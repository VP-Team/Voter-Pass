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

function HelpScreen({ route, navigation }) {
  
  return (
      <View style={styles.container}>
        <Text style={styles.text}>
          This application is designed to promote social distancing while voting
        </Text>
        <Text style={styles.text}>
        Adding a new voter:

        </Text>
        <Text style={styles.text}>
          - Enter the number of people allowed in the line
          
        </Text>
        <Text style={styles.text}>
         
          - Enter the average voting time
          

        </Text>
        <Text style={styles.text}>
         
          - Click New

        </Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fff',
     // alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20,
      
      letterSpacing: 1
    }
  });

  export default HelpScreen;