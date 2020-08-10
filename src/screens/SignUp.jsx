import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export const SignUp = ({ navigation }) => {
    const goToSignIn = () => navigation.navigate('SignIn');

    return (
        <View style={styles.container}>
            <Text>SignUp</Text>     
            <Button 
                title="Go to SignIn"
                onPress={goToSignIn}
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