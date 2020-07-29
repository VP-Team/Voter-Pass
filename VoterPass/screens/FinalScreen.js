import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    PixelRatio,
    Alert,
    SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider } from 'react-native-elements';
import QRCode from '../components/QRCode';
import { BaseRouter } from '@react-navigation/native';
import ViewShot from 'react-native-view-shot';
import * as Print from 'expo-print';
import { CustomHeader } from '../components/CustomHeader';
import styles from '../Styling';
import * as FileSystem from 'expo-file-system';


function FinalScreen({ route, navigation }) {
  
 const viewShotRef= useRef(null);
 
print = async() =>{
  const uri = await viewShotRef.current.capture()
  try {
    const data = await FileSystem.readAsStringAsync('file://' + uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const imageData = 'data:image/png;base64,' + data;
    const pixels = 1080/PixelRatio.get();
    let html = `<img src="${imageData}" width="100%" style="border:2px solid black; height:${pixels}px; width:${pixels}px;" />`;
    const pdf = await Print.printToFileAsync({ html });
    
   console.log('the pdf i got back was ', pdf)
   // return Print.printAsync({ html }).catch(error =>
   //      Alert.alert(error.message)
    // );
    return Print.printAsync({ uri: pdf.uri }).catch(error =>
        Alert.alert(error.message)
   );
} catch (e) {
    console.log('error', e)
}


}

  let ID = route.params.ID;
  let time = route.params.time;
  return (

    <ViewShot style={styles.container} ref={viewShotRef} options={{format:'png'
    , quality:0.9}}>
       <Text style={styles.text}>FINAL</Text>
        <QRCode id = {ID}></QRCode>
        <Text style={styles.text}>Voter ID: {ID}</Text>
        <Text style={styles.text}>Return Time: {time}</Text>
        <StatusBar style="auto" />
        <Button
        title={"Print"}
        onPress={async ()=> {
           print();
           
        }}
        />
        <Button 
          title={"Home"}
          onPress={() => navigation.navigate('Main')}
        />
        
      </ViewShot>
     
      
      
      )
  }

  export default FinalScreen;