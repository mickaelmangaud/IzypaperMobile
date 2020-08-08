import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const Home = () => {
    const { toggleisAuthenticated } = React.useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button 
                title="Disconnect"
                onPress={toggleisAuthenticated}
            />
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