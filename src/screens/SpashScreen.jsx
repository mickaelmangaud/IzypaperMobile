import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Container } from '../components';

export const SplashScreen = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: '#048b9a',
            flex: 1,
        }}>
            <Text>SplashScreen</Text>
        </View>
    )
}