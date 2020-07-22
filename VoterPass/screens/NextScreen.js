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
        <Text>Next with Options below</Text>
        <StatusBar style="auto" />
        <Button 
        title="New Voter"
        onPress={() => navigation.navigate('New')}
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

  export default NextScreen;