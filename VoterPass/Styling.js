import { StyleSheet, Dimensions } from 'react-native'; 

export default StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      padding: 20
    },
    text: {
      fontSize: 30,
      padding: 30,
    },
    listItem:{
      height:"95%",
      width:"100%",
      
      
    },
    card:{
      height: Dimensions.get('window').height / 10,
      width:"90%",
      backgroundColor:"white",
      borderRadius:10,
      justifyContent:"center",
      margin: 3,
    }
  });