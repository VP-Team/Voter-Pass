import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text,
} from 'react-native';
// import all basic components

var tempID
const QRCodeMaker= (props) => {
  //Will change when we connect it to the Unique IDs and time estimates

 const [valueForQRCode, setValueForQRCode] = useState(props.id);
 const valueUpdate= (tempID)=>{
   setValueForQRCode(tempID);
 }

    return (
      <View>
        <QRCode
          //QR code value
          value={valueForQRCode ? valueForQRCode : 'NA'}
          //size of QR Code
          size={250}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
        />
     </View>
    );
  }

export default QRCodeMaker;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 1,
    alignItems: 'center',
    paddingTop: 8,
  },
});