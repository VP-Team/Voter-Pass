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
import CustomHeader from '../components/CustomHeader';
import styles from '../Styling';


function MainScreen({ navigation }) {
  const [votingTime, setVotingTime] = React.useState(null)
    return (
      <View>
        <CustomHeader/>
        <Text style={styles.text}>Menu</Text>
        <Text style={styles.text}>Average Voting Time (per person): {votingTime} min</Text>
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
        onPress={() => navigation.navigate('Settings', {"votingTime": votingTime, "setVotingTime": setVotingTime} )}
        />
        <Button 
        title="Help"
        style={styles.button}
        onPress={() => navigation.navigate('Help')}
        />
      </View>
    )
  }

  export default MainScreen;