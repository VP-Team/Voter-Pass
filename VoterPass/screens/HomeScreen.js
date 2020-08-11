import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    AsyncStorage,
    ImageBackground
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider, Divider, Header } from 'react-native-elements';
import CustomHeader from '../components/CustomHeader';
import styles from '../Styling'
import { TextInput } from 'react-native-gesture-handler';


function HomeScreen({ navigation }) {

    return (
      <View style={styles.container}>
        <CustomHeader/>
        <Text style={styles.headerText}>Welcome to VoterPass!</Text>
        <Text style={styles.text}>Enter average voting time:</Text>
        <Divider style={{ backgroundColor: 'blue' }} />
        <StatusBar style="auto" />
        <TextInput 
        style={styles.input}
        placeholder='Edit Average Time'
        />
        <Text></Text>
        <Text></Text>
        <Text>Or click to go home</Text>
        <Button 
        style={styles.button}
        title="Home"
        onPress={() => navigation.navigate('Main')}
        />
        
        
      </View>
    );
  }

  export default HomeScreen;