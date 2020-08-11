import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider, Header } from 'react-native-elements';
import HomeScreen from './HomeScreen';
import CustomHeaderMain from '../components/CustomHeaderMain';
import styles from '../Styling';


function MainScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <CustomHeaderMain/>
        <Text style={styles.headerText}>Menu</Text>
        <StatusBar style="auto" />
        <Button 
        title="New Voter"
        style={styles.button}
        onPress={() => navigation.navigate('NewVoter')}
        />
        <Button 
        title="View List"
        style={styles.button}
        onPress={() => navigation.navigate('ViewList')}
        />
        <Button 
        title="QR Scanner"
        style={styles.button}
        onPress={()=> navigation.navigate('QRCodeScanner')}
        />
        <Button 
        title="List Settings"
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
        />
      </View>
    )
  }

  export default MainScreen;