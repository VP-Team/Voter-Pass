import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native'


function ViewListScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>View List</Text>
        <StatusBar style="auto" />
        <Button 
        title="New Voter"
        onPress={() => navigation.navigate('New')}
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

  export default ViewListScreen;