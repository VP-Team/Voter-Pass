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
import { BaseRouter } from '@react-navigation/native';

function FinalScreen({ route, navigation }) {
  let ID = route.params.ID;
  let time = route.params.time;
  return (
      <View style={styles.container}>
        <Text>FINAL</Text>
        <QRCode id = {ID}></QRCode>
        <Text>Voter's ID: {ID}</Text>
        <Text>Return Time: {time}</Text>
        <StatusBar style="auto" />
        <Button 
          title={"Home"}
          onPress={() => navigation.navigate('Main')}
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