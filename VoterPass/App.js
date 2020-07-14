import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button, ListView, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';
import uuid from 'react-native-uuid';
import { nanoid } from 'nanoid/async/index.native';

const db = SQLite.openDatabase("voter.db");

function Voters() {
  const [voters, setVoters] = React.useState([]);
  React.useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM voter;",[],
        (_, { rows: { _array } }) => setVoters(_array));
    })
  })

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
      <Text>Voters</Text>
      {voters.map(({ id, time}) => (
        <Button key={id} title={id} onPress={() => handleClick(id)}></Button>
      ))}
    </View>
  );
}

export default function App() {
  const [forceUpdate, forceUpdateId] = useForceUpdate()
  /* On render of app component, voter table in database will be created if it does not exist */
  React.useEffect(() => {
    db.transaction(tx => {
      tx.executeSql("DROP TABLE IF EXISTS VOTER");
      tx.executeSql("CREATE TABLE IF NOT EXISTS VOTER (id text primary key not null, time text);");
    });
  }, [])

  const add = () => {
    db.transaction(
      tx => {
        let id = uuid.v4();
        tx.executeSql("insert into voter (id, time) values (?, '12:23 PM')", [id]);
        tx.executeSql("select * from voter", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      () => {console.log("Error adding to database!")},
      forceUpdate
    );
  }

  return (
    <View style={styles.container}>
      <Text>VoterPass</Text>
      <Button onPress={() => {
          add();
      }} 
      title="Add User"></Button>
      <ScrollView>
        <Voters></Voters>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

function useForceUpdate() {
  const [value, setValue] = React.useState(0);
  return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
