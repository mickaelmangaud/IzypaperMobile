import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const Home = ({ navigation }) => {
    const { logout } = React.useContext(AuthContext);

    const logoutFn = () => {
        console.log('logout')
        logout()
    }

    return (
        <View style={styles.container}>
            <Text>Prisca coulis kabeya</Text>
            <Button 
                title="Disconnect"
                onPress={logoutFn}
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