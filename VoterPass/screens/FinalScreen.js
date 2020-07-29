import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider } from 'react-native-elements';
import QRCode from '../components/QRCode';
import { CustomHeader } from '../components/CustomHeader';
import styles from '../Styling'

function FinalScreen({ route, navigation }) {
  let ID = route.params.ID;
  let time = route.params.time;
  return (
      <View style={styles.container}>
        <CustomHeader/>
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

  export default FinalScreen;