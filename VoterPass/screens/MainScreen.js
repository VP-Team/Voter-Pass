import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    ImageBackground
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider, Header, Image } from 'react-native-elements';
import HomeScreen from './HomeScreen';
import CustomHeaderMain from '../components/CustomHeaderMain';
import styles from '../Styling';

function MainScreen({route, navigation }) {
  const [votingTime, setVotingTime] = React.useState(route.params.initalVoteTime);
  const [lastTime, setLastTime] = React.useState(new Date().getTime());
  console.log(lastTime);
    return (
      <View style={styles.container}>
        <CustomHeaderMain/>
        <Text style={styles.headerText}>Menu</Text>
        <StatusBar style="auto" />
        <Button 
        title="New Voter"
        style={styles.button}
        onPress={() => navigation.navigate('NewVoter', { "lastTime": lastTime, "setLastTime": setLastTime, "votingTime": votingTime} )}
        />
        <Button 
        title="View List"
        style={styles.button}
        onPress={() => navigation.navigate('ViewList', { "lastTime": lastTime, "setLastTime": setLastTime, "votingTime": votingTime})}
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
      </View>
    )
  }

  export default MainScreen;