import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>SplashScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});