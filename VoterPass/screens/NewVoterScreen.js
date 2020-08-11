import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    TextInput,
    Alert
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider } from 'react-native-elements';
import uuid from 'uuid-random';
import * as SQLite from 'expo-sqlite';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import styles from '../Styling'
import { selectAssetSource } from 'expo-asset/build/AssetSources';
import { RotationGestureHandler } from 'react-native-gesture-handler';

const db = SQLite.openDatabase("voter.db");

const default_date = new Date("2015-03-25T12:00:00Z");

function NewScreen({ route, navigation }) {
    const [forceUpdate, forceUpdateId] = useForceUpdate();
    const [ID, setID] = React.useState(uuid());
    const [time, setTime] = React.useState(null);
    const [m, setM] = React.useState("AM");
    const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const add = () => {
      var meridian = "PM";
      // Average Voting time in Milliseconds
      var minInMill = route.params.votingTime * 60000;
      
      var returnTimeLast = route.params.lastTime + minInMill;
      var returnTimeNow = (new Date().getTime()) + minInMill;
      // Find Max HERE
      var returnTime = Math.max(returnTimeLast, returnTimeNow)
      route.params.setLastTime(returnTime); // when the next voter should comeback
 
      var date = new Date(returnTime);
      
      var formattedTime = date.toLocaleTimeString("en-US");
      formattedTime = formattedTime.substring(0,5) + formattedTime.substring(8,11);

      console.log(formattedTime);
      
      db.transaction(
        tx => {
          tx.executeSql("insert into voter (id, time, check_in) values (?, ?, 0)", [ID, formattedTime]);
          tx.executeSql("select * from voter", [], (_, { rows }) =>
            console.log(JSON.stringify(rows))
          );
        },
        () => {console.log("Error adding to database!")},
        null
      );
      console.log("GENERATE ID CLICKED");
        navigation.navigate('Final', {ID, formattedTime});
    }

    const getLastTime = () => {
      console.log(route.params.lastTime);    
    }
  
    const showTimePicker = () => {
      setTimePickerVisibility(true);
    };
  
    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };
  
    const handleConfirm = (time) => {
      getLastTime();
      console.log("A time has been picked: ", time);
      let hours = time.getHours();
      if(hours == 0)
        hours = hours + 12;
      if(hours > 12){
        hours = hours - 12;
        setM("PM");
      }
      hours = hours.toString();
      
      let min = time.getMinutes();
      if(min < 10){
        min = "0" + min.toString()
      } else{
        min = min.toString();
      }
      let new_time = hours + ":" + min + " " + m;
      console.log(new_time);
      setTime(new_time);
      setShow(true);
      hideTimePicker();
    };

    return (
      
      <View style={styles.container}>
      <CustomHeader/>
      <Text style={styles.text}>New Voter information</Text>

      <Button 
        title="Add New Voter"
        style={styles.button}
        onPress={() => {
        add();      
        }}
      />
    </View>
  )
}

function useForceUpdate() {
  const [value, setValue] = React.useState(0);
  return [() => setValue(value + 1), value];
}

export default NewScreen;