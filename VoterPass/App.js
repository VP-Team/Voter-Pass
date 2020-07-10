import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 


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

function NextScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Next with Options below</Text>
      <StatusBar style="auto" />
      <Button 
      title="New Voter"
      onPress={() => navigation.navigate('New Voter')}
      />
      <Button 
      title="View List"
      onPress={() => navigation.navigate('View List')}
      />
      <Button 
      title="List Settings"
      onPress={() => navigation.navigate('List Settings')}
      />
    </View>
  )
}

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
      onPress={() => navigation.navigate('Manual Entry')}
      />
      <StatusBar style="auto" />
    </View>
  )
}

function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Voter's Name:</Text>
      <StatusBar style="auto" />
      <Button 
      title="Calculate Return Time"
      onPress={() => navigation.navigate('Final Screen')}
      />
    </View>
  )
}

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
      onPress={() => navigation.navigate('Final Screen')}
      />
    </View>
  )
}

function ViewListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>View List</Text>
      <StatusBar style="auto" />
      <Button 
      title="New Voter"
      onPress={() => navigation.navigate('New Voter')}
      />
    </View>
  )
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <StatusBar style="auto" />
      <Text>Edit people in line</Text>
      <Text>Edit time average</Text>
    </View>
  )
}

function FinalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>FINAL</Text>
      <Text>Voter's Name:</Text>
      <Text>Return Time:</Text>
      <StatusBar style="auto" />
      <Button 
      title="OK"
      />
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Next" component={NextScreen} />
        <Stack.Screen name="New Voter" component={NewScreen} />
        <Stack.Screen name="View List" component={ViewListScreen} />
        <Stack.Screen name="List Settings" component={SettingsScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Manual Entry" component={ManualScreen} />
        <Stack.Screen name="Final Screen" component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
