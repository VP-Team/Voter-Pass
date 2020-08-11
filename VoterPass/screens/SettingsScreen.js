import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider } from 'react-native-elements';
import CustomHeader from '../components/CustomHeader';
import styles from '../Styling'
import { TextInput } from 'react-native-gesture-handler';


function SettingsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <CustomHeader/>
        <Text style={styles.headerText}>Settings</Text>
        <StatusBar style="auto" />
        <TextInput 
        style={styles.input}
        placeholder='Edit Average Time'
        />
      </View>
    )
  }

  export default SettingsScreen;