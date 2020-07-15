import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native'


function SettingsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
        <StatusBar style="auto" />
        <Text>Edit people in line</Text>
        <Text>Edit time average</Text>
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

  export default SettingsScreen;