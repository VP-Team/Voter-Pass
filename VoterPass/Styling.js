import { StyleSheet, Dimensions } from 'react-native'; 

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
    }
  });