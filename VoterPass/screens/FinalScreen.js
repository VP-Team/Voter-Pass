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
import CustomHeader from '../components/CustomHeader';
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
    let html = `<meta name="viewport" content ="width=device-width,initial-scale=1,user-scalable=yes" />
    <img src="${imageData}" width="100%" style="border:2px solid black; height:${pixels/2}px; width:${pixels/2}px;" />`;
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
  let time = route.params.formattedTime;
  return (
<>
    <CustomHeader/>
    <Text style={styles.headerText}>New Voter Information</Text>
    <ViewShot style={styles.QR} ref={viewShotRef} options={{format:'png'
    , quality:0.9}}>
        <QRCode id = {ID}></QRCode>
        <Text style={styles.returnTime}>Return Time: </Text>
        <Text style={styles.returnTime}>{time}</Text>
        <StatusBar style="auto" />

      </ViewShot>
     <View style={styles.container}>
     <Button
        title={"Print"}
        style={styles.button}
        onPress={async ()=> {
           print();
           
        }}
        />
        <Button 
          style={styles.button}
          title={"Home"}
          onPress={() => navigation.navigate('Main')}
        />
      </View>
      </>
      )
  }

  export default FinalScreen;