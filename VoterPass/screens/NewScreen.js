import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import uuid from 'uuid-random';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("voter.db");


function NewScreen({ route, navigation }) {
   var tempID
    const [forceUpdate, forceUpdateId] = useForceUpdate()
    const add = () => {
      db.transaction(
        tx => {
          let id = uuid();
          console.log(uuid());
          tempID = id;
          tx.executeSql("insert into voter (id, time) values (?, '12:23 PM')", [id]);
          tx.executeSql("select * from voter", [], (_, { rows }) =>
            console.log(JSON.stringify(rows))
          );
        },
        () => {console.log("Error adding to database!")},
        null
      );
    }
    return (
      <View style={styles.container}>
        <Text>New Voter information. {tempID} </Text>
        <Button 
        title="SCAN ID/TAKE PICTURE"
        onPress={() => navigation.navigate('Scan')}
        />
        <Button 
        title="GENERATE ID"
        onPress={() => {
          add();
          console.log("GENERATE ID CLICKED!")
          navigation.navigate('Final', {itemID: tempID})
        }}
        />
        <StatusBar style="auto" />
      </View>
    )
  }

  function useForceUpdate() {
    const [value, setValue] = React.useState(0);
    return [() => setValue(value + 1), value];
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