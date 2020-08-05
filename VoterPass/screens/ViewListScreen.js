import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider } from 'react-native-elements';
import { ScrollView, Dimensions } from 'react-native';
import * as SQLite from 'expo-sqlite';
import CustomHeader from '../components/CustomHeader';
import styles from '../Styling'

const db = SQLite.openDatabase("voter.db");

function Voters() {
  const [voters, setVoters] = React.useState([]);
  React.useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM voter;",[],
        (_, { rows: { _array } }) => setVoters(_array));
    })
  }, [])

  if (voters === null || voters.length === 0) {
    return null;
  }

  const handleClick = (id) => {
    db.transaction(tx => {
      tx.executeSql(
        "DELETE FROM voter WHERE id=?;", [id]);
      tx.executeSql(
        "SELECT * FROM voter;",[],
        (_, { rows: { _array } }) => setVoters(_array));
   })
  }

  return(

      <ScrollView style={styles.listItem}>
        <View style={styles.container}>
          {voters.map(({ id, time}) => (
           <View style={styles.card}>

              <Text style={styles.text}>Id: {id} Time: {time}</Text>
              <Text style={styles.text}></Text>
              <Button key={id} title="delete" onPress={()=> handleClick(id)}></Button>
              </View>
            
          ))}
        </View>
      </ScrollView>
      
  );
}



function ViewListScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <CustomHeader/>
        <Text style={styles.text}>View List</Text>
        <Voters></Voters>
        {<Button 
        title="New Voter"
        style={styles.button}
        onPress={() => navigation.navigate('New')}
        />}
      </View>
    )
  }

  export default ViewListScreen;