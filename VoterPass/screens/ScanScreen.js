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


function ScanScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <CustomHeader/>
        <Text>Voter's Name:</Text>
        <StatusBar style="auto" />
        <Button 
        title="Calculate Return Time"
        onPress={() => navigation.navigate('Final')}
        />
      </View>
    )
  }

  export default ScanScreen;