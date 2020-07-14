import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text,
} from 'react-native';
// import all basic components


const QRCodeMaker= (props) => {
  //Will change when we connect it to the Unique IDs and time estimates
 const [inputValue, setInputValue] = useState('');
 const [valueForQRCode, setValueForQRCode] = useState('https://www.youtube.com/watch?v=oHg5SJYRHA0');
 const handleValueInput = e => {
  setInputValue(e.target.value);
};
    return (
      <View>
        <QRCode
          //QR code value
          value={valueForQRCode ? valueForQRCode : 'NA'}
          //size of QR Code
          size={250}
          //Color of the QR Code (Optional)
          color="blue"
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