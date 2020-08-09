import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const SignIn = ({ navigation }) => {
    const goToSignUp = () => navigation.navigate('SignUp');
    const { login } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>SignIn</Text>
            <Button
                title="Go To SignUp"
                onPress={() => login('mickael', 'okcompute')}
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