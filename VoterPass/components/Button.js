import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "@react-native";

const Button = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={}>{title}</Text>
    </TouchableOpacity>
)


