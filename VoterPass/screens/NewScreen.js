import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import uuid from 'react-native-uuid';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("voter.db");

function NewScreen({ navigation }) {
    const [forceUpdate, forceUpdateId] = useForceUpdate()
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
        null
      );
    }
    return (
      <View style={styles.container}>
        <Text>New Voter information</Text>
        <Button 
        title="Add New Voter"
        onPress={() => {
          add();
          console.log("GENERATE ID CLICKED");
          navigation.navigate('Final');
        }}
        />
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