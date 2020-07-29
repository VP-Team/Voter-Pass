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
import { Button } from 'react-native'
import QRCode from '../components/QRCode';
import { BaseRouter } from '@react-navigation/native';
import ViewShot from 'react-native-view-shot';
import * as Print from 'expo-print';



function FinalScreen({ route, navigation }) {
  
 const viewShotRef= useRef(null);
 
print = async() =>{
  const uri = await viewShotRef.current.capture()
  try {
    let html = `<img src="${uri}" width="100%" />
`;
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
          <Text>FINAL</Text>
        <QRCode id = {ID}></QRCode>
        <Text>Voter's ID: {ID}</Text>
        <Text>Return Time: {time}</Text>
        <StatusBar style="auto" />
        <Button
        title={"Print"}
        onPress={async ()=> {
           print();
           
        }}
        />
        <Button 
          title={"Home"}
          onPress={() => navigation.navigate('Next')}
        />
        
      </ViewShot>
     
      
      
      )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  export default FinalScreen;