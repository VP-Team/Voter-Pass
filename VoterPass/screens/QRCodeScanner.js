import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("voter.db");

export default function QRCodeScaner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [idIsValid, setIdIsValid] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const checkValidId = (data) => {
    db.transaction(
      tx => {
            tx.executeSql("select id from voter", [], (_, { rows }) =>
               {console.log(JSON.stringify(data))
                  console.log(JSON.stringify(rows._array))
                  var temp = JSON.stringify(data);
               
                  for(var i=0; i<rows._array.length; i++){
                    if(temp === JSON.stringify(rows._array[i].id)){
                     setIdIsValid(true);
                     break;
                    } 

                  }
              }       
          );
      }
   ) 
 }
 
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    checkValidId(data);
    if(idIsValid == true){
    alert(`Bar code with type ${type} and data ${data} is a Valid Id`);
    console.log("Valid ID Scanned.")
    }
    else{
      alert(`Bar code with type ${type} and data ${data} is an InValid Id`);
     console.log("Invalid ID Scanned.")
    }
    setIdIsValid(false);
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
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Rescan'} onPress={() => setScanned(false)} />}
    </View>
  );
}