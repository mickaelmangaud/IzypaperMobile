import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

export const SignUp = ({ navigation }) => {
    const goToSignIn = () => navigation.navigate('SignIn');

    return (
        <Container style={styles.container}>
            <Text>SignUp</Text>     
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;