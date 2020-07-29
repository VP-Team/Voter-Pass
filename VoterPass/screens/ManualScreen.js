import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider } from 'react-native-elements';
import styles from '../Styling'

function ManualScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <CustomHeader/>
        <Text style={styles.text}>Type Voter's name here</Text>
        <Button
        title="Save"
        style={styles.button}
        />
        <StatusBar style="auto" />
        <Button 
        title="Calculate Return Time"
        style={styles.button}
        onPress={() => navigation.navigate('Final')}
        />
      </View>
    )
  }

  export default ManualScreen;