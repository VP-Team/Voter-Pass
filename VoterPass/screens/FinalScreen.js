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

function FinalScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>FINAL</Text>
        <QRCode></QRCode>
        <Text>Voter's Name:</Text>
        <Text>Return Time:</Text>
        <StatusBar style="auto" />
        <Button 
        title="OK"
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  export default FinalScreen;