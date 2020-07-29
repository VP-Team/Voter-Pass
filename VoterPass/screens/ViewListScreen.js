import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider } from 'react-native-elements';
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