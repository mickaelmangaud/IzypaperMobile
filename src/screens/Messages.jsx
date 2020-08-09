import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const Messages = ({ navigation }) => {
    const { logout } = React.useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text>Messages</Text>
            <Button 
                title="Disconnect"
                onPress={logout}
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