import React from 'react';
import { Button, Text, ImageBackground } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components/native';

export const SignIn = ({ navigation }) => {
    const goToSignUp = () => navigation.navigate('SignUp');
    const { login } = React.useContext(AuthContext);
    
    return (
        <ImageBackground style={{ width: '100%', height: '100%', flex: 1}} source={require('../../assets/background.jpg')}>
            <SignInContainer>
                <LoginTitle>IzyPaper</LoginTitle>

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
        </ImageBackground>
    )
}

const SignInContainer = styled.View`
    flex: 1;
    align-items: center;
    padding: 10%;
`;

const LoginTitle = styled.Text`
    font-size: 38px;
    text-transform: uppercase;
    color: white;
    margin-top: 10%;
    margin-bottom: 40px;
    font-family: 'Ubuntu_700Bold';
`;

const SignInInput = styled.TextInput`
    background-color: white;
    height: 48px;
    width: 100%;
    padding-horizontal: 12px;
    border-radius: 5px;
    margin-bottom: 24px;
`;