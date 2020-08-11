import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    AsyncStorage,
    ImageBackground,
    Modal
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider, Divider, Header } from 'react-native-elements';
import CustomHeaderFirst from '../components/CustomHeaderFirst';
import {Picker} from '@react-native-community/picker';
import styles from '../Styling'
import { TextInput } from 'react-native-gesture-handler';

function HomeScreen({ navigation }) {
  const [isVotingTimeVisible, setVotingTimeVisibility] = React.useState(false);
  const [votingTimeLocal, setVotingTimeLocal] = React.useState(5);
  const minutes = ['5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
  //<Image style={styles.pic} source={Logo}></Image>

  const showTimePicker = () => {
    setVotingTimeVisibility(true);
  };

  const handleSubmit = () => {
    setVotingTimeLocal(votingTimeLocal);
    setVotingTimeVisibility(false);
  };
    return (
      <View style={styles.container}>
        <CustomHeaderFirst/>
        <Text style={styles.welcomeText}>Welcome to Voter Pass!</Text>
        <Text style={styles.headerText}>Average Voting Time: </Text>
        <Text style={styles.returnTime}>{votingTimeLocal} minutes</Text>
        <Divider style={{ backgroundColor: 'blue' }} />
        <StatusBar style="auto" />
        <Button 
        title="Edit Time Average"
        style={styles.button}
        onPress={showTimePicker}
        />
        
        <Modal visible={isVotingTimeVisible} >
          <Picker
          selectedValue={votingTimeLocal}
          mode="dropdown"
          onValueChange={itemValue => setVotingTimeLocal(parseInt(itemValue))}>
            {minutes.map((item, index) => (
              <Picker.Item label={item} value={parseInt(item)} key={index} />
            ))}
          </Picker>
          <View style={styles.container}>
          <Button style={styles.button}
          title="Submit"
          onPress={handleSubmit}
          ></Button>
          </View>
        </Modal>
        <Button 
        style={styles.button}
        title="Home"
        onPress={() => navigation.navigate('Main', {"initalVoteTime": votingTimeLocal})}
        />
      </View>
    );
  }

  export default HomeScreen;