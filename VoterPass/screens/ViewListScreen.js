import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, Dimensions } from 'react-native';
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

      <ScrollView style={styles.listItem}>
        <View style={styles.container}>
          {voters.map(({ id, time}) => (
            <View style={styles.card}
              onStartShouldSetResponder={() => handleClick(id)}
            >

              <Text style={styles.text}>Time: {time}</Text>
              <Text style={styles.text}>Id: {id}</Text>

            </View>
          ))}
        </View>
      </ScrollView>
  );
}



function ViewListScreen({ navigation }) {
    return (
      <View>
        <Text style={styles.text}>View List</Text>
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
      alignItems:"center",
    },
    listItem:{
      height:"95%",
      width:"100%",

    },
    card:{
      height: Dimensions.get('window').height / 10,
      width:"90%",
      backgroundColor:"white",
      borderRadius:10,
      justifyContent:"center",
      margin: 3,
    },
    text: {
      justifyContent: 'center',
      textAlign:"center",
      color : "black", 
      fontSize : 15,
    }
  });
  
  export default ViewListScreen;