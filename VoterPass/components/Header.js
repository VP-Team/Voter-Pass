import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "@react-native";

export default Header = (title) => (
    <View style={styles.header}>
        <View>
            <Text style={styles.headerText}>{title}</Text>
        </View>
        
    </View>
)
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1
    }
})