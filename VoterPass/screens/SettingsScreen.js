import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    Modal
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider } from 'react-native-elements';
import CustomHeader from '../components/CustomHeader';
import {Picker} from '@react-native-community/picker';
import styles from '../Styling'


function SettingsScreen({ route, navigation }) {
  const [isVotingTimeVisible, setVotingTimeVisibility] = React.useState(false);

  const showTimePicker = () => {
    setVotingTimeVisibility(true);
  };

  const handleSubmit = () => {
    route.params.setVotingTime(votingTimeLocal);
    setVotingTimeVisibility(false);
  };

  const minutes = ['null', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
  const [votingTimeLocal, setVotingTimeLocal] = React.useState(route.params.votingTime);
  
    return (
      <View style={styles.container}>
        <CustomHeader/>
        <Text style={styles.text}>Settings</Text>
        <Text>Current voting time {votingTimeLocal}</Text>
        <StatusBar style="auto" />
        <Button 
        title="Edit People in Line"
        style={styles.button}
        //onPress={() => navigation.navigate('Final')}
        />
        <Button 
        title="Edit Time Average"
        style={styles.button}
        onPress={showTimePicker}
        />

        <Modal visible={isVotingTimeVisible}>
        <CustomHeader/>
          <Picker
          selectedValue={votingTimeLocal}
          mode="dropdown"
          onValueChange={itemValue => setVotingTimeLocal(parseInt(itemValue))}>
            {minutes.map((item, index) => (
              <Picker.Item label={item} value={item} key={index} />
            ))}
          </Picker>
          <Button 
          style={styles.button}
          title="Submit"
          onPress={handleSubmit}
          ></Button>
        </Modal>
      </View>
      
    )
  }

  export default SettingsScreen;