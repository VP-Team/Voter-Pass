import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native'


function ManualScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Type Voter's name here</Text>
        <Button
        title="Save"
        />
        <StatusBar style="auto" />
        <Button 
        title="Calculate Return Time"
        onPress={() => navigation.navigate('Final')}
        />
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

  export default ManualScreen;