import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as SQLite from 'expo-sqlite';
import CustomHeader from '../components/CustomHeader';
import styles from '../Styling';
import QRPic from '../QRTemp.png'

const db = SQLite.openDatabase("voter.db");

export default function QRCodeScaner ({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [idIsValid, setIdIsValid] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const checkInVoter = (data) => {
    console.log("Checking in voter with ID: " + data);
    db.transaction(tx => {
      tx.executeSql("UPDATE voter SET check_in = 1 WHERE id=?", [data]);
    });
  }

  const checkValidId = (data) => {
    db.transaction(tx => {
      
      tx.executeSql(
        "SELECT id, time FROM voter WHERE id=?;", [data],
        (_, { rows: { _array } }) => {
          {/* Query gets the count of the ID's that match the data passed in, if the array is not null then we found the ID in the database
              so alert that we found and set idIsValid to true */}
          console.log(JSON.stringify(_array))
          console.log(_array.length)
          
          let returnTime = _array[0].time;
          let offsetVal= 10*60000;
          let currTime = new Date().getTime();
          console.log(currTime-offsetVal)
          console.log(returnTime)
          if(_array.length != 0){
            if(!idIsValid){
              if((returnTime-offsetVal)>currTime){
                Alert.alert("Voter Is Too Early", "ID is valid. Come back later.", [
                  {
                    text: "Scan",
                    style: "cancel"
                  },
                  {
                    text: "Back to Main",
                    onPress: () => {navigation.navigate('Main')},
                    style: "default"
                  }
                ]);
                setIdIsValid(false);
              }
              else if((returnTime+offsetVal)<currTime){
                Alert.alert("Voter Is Too Late", "ID is no longer valid.", [
                  {
                    text: "Scan",
                    style: "cancel"
                  },
                  {
                    text: "Back to Main",
                    onPress: () => {navigation.navigate('Main')},
                    style: "default"
                  }
                ]);
                setIdIsValid(false);
              }
              else{
              console.log();
              Alert.alert("Voter Valid", "ID is valid. Check in voter?", [{
                text: "No",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              }, {
                text: "Yes",
                onPress: () => {
                  checkInVoter(data)
                  setIdIsValid(true);
                  navigation.navigate('Main');
                },
                style: "default"
              }]);
              
              }
            }
          } else{
            Alert.alert("Voter Not Valid", "ID is not valid.", [
              {
                text: "Scan",
                style: "cancel"
              },
              {
                text: "Back to Main",
                onPress: () => {navigation.navigate('Main')},
                style: "default"
              }
            ]);
            setIdIsValid(false);
          }
        });
    })
  }
 
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    checkValidId(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
       
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}>
        <CustomHeader/>
        <Text style={styles.description}>Scan QR Code</Text>
        <Image style={styles.QROverlay} source={QRPic}></Image>
      </BarCodeScanner>
      
      

      {scanned && <Button title={'Tap to Rescan'} onPress={() => setScanned(false)} />}
    </View>
  );
}