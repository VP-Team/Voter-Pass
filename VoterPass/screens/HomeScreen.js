import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native'


function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Preferred # of voters in line</Text>
        <Text>Average voting time</Text>
        <StatusBar style="auto" />
        <Button
        title="Next"
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