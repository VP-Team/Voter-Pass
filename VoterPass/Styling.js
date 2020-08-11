import { StyleSheet, Dimensions, ImageBackground } from 'react-native'; 

export default StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    qrcontainer: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      padding: 20,
      width: 300
    },
    text: {
      fontSize: 50,
      padding: 1,
    },
    headerText: {
      padding: 25,
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '500',
      color: '#2b8cd8',
    },
    returnTime: {
      fontSize: 35,
      padding:10,
    },
    listItem:{
      height:"95%",
      width:"100%",
    },
    card:{
      height: Dimensions.get('window').height / 5,
      width:"90%",
      backgroundColor:"white",
      borderRadius:10,
      borderColor: "black",
      justifyContent:"center",
      margin: 1,
    },
    QR: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 8,
      margin: 10,
      width: 200
    },
    pic: {
      borderRadius: 8,
    },
    description: {
      fontSize: 50,
      marginTop: '10%',
      textAlign: 'center',
      width: '100%',
      color: '#2b8cd8'
    },
    QROverlay: {
      width: '100%',
      height: '50%'
    },
  });