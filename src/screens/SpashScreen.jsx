import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Container } from '../components';
import { colors } from '../utils';

export const SplashScreen = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: colors.primary,
            flex: 1,
        }}>
            <Text>SplashScreen</Text>
        </View>
    )
}