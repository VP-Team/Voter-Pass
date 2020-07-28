import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native'


function NextScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style = {styles.text}>Select from the Options below:</Text>
        <StatusBar style="auto" />
        <Button 
        title="New Voter"
        onPress={() => navigation.navigate('NewVoter')}
        />
        <Button 
        title="View List"
        onPress={() => navigation.navigate('ViewList')}
        />
        <Button 
        title="QR Scanner"
        onPress={()=> navigation.navigate('QRCodeScanner')}
        />
        <Button 
        title="List Settings"
        onPress={() => navigation.navigate('Settings')}
        />
        <Button 
        title="Help"
        onPress={() => navigation.navigate('Help')}
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 25
    }
  });

  export default NextScreen;