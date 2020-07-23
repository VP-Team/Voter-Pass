import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import * as SQLite from 'expo-sqlite';

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
    <View>
      {voters.map(({ id, time}) => (
        <Button key={id} title={id + " " + time} titleStyle={{
          color : "black", fontSize : 8
        }} onPress={() => handleClick(id)}></Button>
      ))}
    </View>
  );
}

function ViewListScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>View List</Text>
        <Voters></Voters>
        {/* <Button 
        title="New Voter"
        onPress={() => navigation.navigate('New')}
        /> */}
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Button: {
      color : "black",
      fontSize : 12
    }
  });

  export default ViewListScreen;