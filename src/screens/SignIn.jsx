import React from 'react';
import { Button, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components/native';

export const SignIn = ({ navigation }) => {
    const goToSignUp = () => navigation.navigate('SignUp');
    const { login } = React.useContext(AuthContext);
    
    return (
        <SignInContainer>
            <LoginTitle>IzyPaper Login</LoginTitle>

            <SignInInput
                placeholder="Email"
                keyboardType="email-address"
            />
            <SignInInput
                placeholder="Mot de passe"
                secureTextEntry
            />
            <Button 
                title="Login"
                onPress={() => login('mickael', 'okcomputer')}
            />
        </SignInContainer>
    )
}

const SignInContainer = styled.View`
    flex: 1;
    background-color: #048b9a;
    align-items: center;
    padding: 10%;
`;

const LoginTitle = styled.Text`
    font-size: 32px;
    text-transform: uppercase;
    color: white;
    margin-top: 15%;
    margin-bottom: 40px;
`;

const SignInInput = styled.TextInput`
    background-color: white;
    height: 48px;
    width: 100%;
    padding-horizontal: 12px;
    border-radius: 5px;
    margin-bottom: 24px;
`;