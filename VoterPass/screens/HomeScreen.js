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


function HomeScreen({ navigation }) {

    return (
      <View style={styles.container}>
        <CustomHeader/>
        <Text style={styles.text}>Preferred # of voters in line:</Text>
        <Text style={styles.text}>Average voting time:</Text>
        <Divider style={{ backgroundColor: 'blue' }} />
        <StatusBar style="auto" />
        <Button
        title="Next"
        style={styles.button}
        onPress={() => navigation.navigate('Main')}
        />
        
      </View>
    );
  }

  export default HomeScreen;