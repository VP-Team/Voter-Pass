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
import { Divider } from 'react-native-elements'

const db = SQLite.openDatabase("voter.db");

function Voters() {
  const [uncheckedVoters, setUncheckedVoters] = React.useState([]);
  const [checkedVoters, setCheckedVoters] = React.useState([]);
  React.useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM voter WHERE check_in=0;",[],
        (_, { rows: { _array } }) => setUncheckedVoters(_array));
      tx.executeSql(
        "SELECT * FROM voter WHERE check_in=1;",[],
        (_, { rows: { _array } }) => setCheckedVoters(_array));
    })
  }, [])

  if (uncheckedVoters === null || uncheckedVoters.length === 0) 
  {
    if(checkedVoters === null || checkedVoters.length === 0)
    {
      return null;
    }
  }

  const handleClick = (id) => {
    db.transaction(tx => {
      tx.executeSql(
        "DELETE FROM voter WHERE id=?;", [id]);
      tx.executeSql(
        "SELECT * FROM voter WHERE check_in=0;",[],
        (_, { rows: { _array } }) => setUncheckedVoters(_array));
      tx.executeSql(
        "SELECT * FROM voter WHERE check_in=1;",[],
        (_, { rows: { _array } }) => setCheckedVoters(_array));
   })
  }

  const formatTime = (time) => {
    var date = new Date(time);
      var formattedTime = date.toLocaleTimeString("en-US");
      
      if(0<(date.getHours()%12) && (date.getHours()%12) < 10){
        formattedTime ='0' + formattedTime.substring(0,4) + formattedTime.substring(7,10);
      }
      else{
      formattedTime = formattedTime.substring(0,5) + formattedTime.substring(8,11);
      }
      return formattedTime;
  }

  return(
      <ScrollView style={styles.listItem}>
        {(checkedVoters.length > 0) && <View style={styles.container}>
          <Text>Checked In</Text>
          {checkedVoters.map(({ id, time}) => (
            <View key={id} style={styles.card}>
              <Text style={{fontSize: 15}}>Id: {id}</Text>
              <Text style={{fontSize: 15}}>Time: {formatTime(time)}</Text>
              <Button key={id} title="delete" onPress={()=> handleClick(id)}></Button>
            </View>
          ))}
        </View>}
        <View style={styles.container}>
          <Text>Unchecked In</Text>
          {uncheckedVoters.map(({ id, time}) => (
            <View key={id} style={styles.card}>
              <Text style={{fontSize: 15}}>Id: {id}</Text>
              <Text style={{fontSize: 15}}>Time: {formatTime(time)}</Text>
              <Button key={id} title="delete" onPress={()=> handleClick(id)}></Button>
            </View>
          ))}

        </View>
      </ScrollView>
  );
}

function ViewListScreen({ route , navigation }) {
    return (
      <View style={styles.container}>
        <CustomHeader/>
        <Text style={styles.headerText}>Voter List</Text>
        <Voters></Voters>
        {<Button 
        title="New Voter"
        style={styles.button}
        onPress={() => navigation.navigate('NewVoter', { "lastTime": route.params.lastTime, "setLastTime": route.params.setLastTime, "votingTime": route.params.votingTime})}
        />}
      </View>
    )
  }

  export default ViewListScreen;