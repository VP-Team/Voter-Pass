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
import { Button } from 'react-native';


function HomeScreen({ navigation }) {

    return (
      <View style={styles.container}>
        
        <ImageBackground style={{width: 300,
                       height:300}}
        source={require('../assets/logo.png')}
        />
        <Button
        title="Next"
        color="orange"
        onPress={() => navigation.navigate('Next')}
        />
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  export default HomeScreen;