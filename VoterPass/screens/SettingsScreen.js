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


function SettingsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <CustomHeader/>
        <Text style={styles.text}>Settings</Text>
        <StatusBar style="auto" />
        <Button 
        title="Edit People in Line"
        style={styles.button}
        //onPress={() => navigation.navigate('Final')}
        />
        <Button 
        title="Edit Time Average"
        style={styles.button}
        //onPress={() => navigation.navigate('Final')}
        />
      </View>
    )
  }

  export default SettingsScreen;