import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Feed = () => {
    return (
        <View style={styles.container}>
            <Text>Feed</Text>            
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