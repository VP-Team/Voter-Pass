import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native'


function NewScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>New Voter information</Text>
        <Button 
        title="SCAN ID/TAKE PICTURE"
        onPress={() => navigation.navigate('Scan')}
        />
        <Button 
        title="ENTER MANUALLY"
        onPress={() => navigation.navigate('Manual')}
        />
        <StatusBar style="auto" />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  export default NewScreen;