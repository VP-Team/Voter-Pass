import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-elements';

const CustomButton = ({ onPress, title }) => (
    <TouchableOpacity 
    onPress={onPress} 
    style={styles.appButtonContainer}
    variant="contained"
    color="primary"
    >
        <Text style={styles.appButtonText}>{title}</Text>
        
    </TouchableOpacity>
)
