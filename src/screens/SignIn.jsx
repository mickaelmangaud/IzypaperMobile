import React from 'react';
import { Text, ImageBackground, Image, View } from 'react-native';
import { Button } from '../components';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { colors } from '../utils';
import { useQuery, gql } from '@apollo/client';

export const SignIn = ({ navigation }) => {
    const goToSignUp = () => navigation.navigate('SignUp');
    const { login } = React.useContext(AuthContext);
    const { loading, error, data } = useQuery(QUERY);

    console.log(data)
    
    return (
        <ImageBackground style={{ width: '100%', height: '100%', flex: 1}} resizeMode="cover" source={require('../../assets/background.jpg')}>
            <SignInContainer>
                <LoginWrapper 
                    animation="slideInUp"
                    duration={500}
                >
                    <Text>{JSON.stringify(data, undefined, 2)}</Text>
                    <LoginTitle >YzyPaper</LoginTitle>
                    <SignInInput
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                    <SignInInput
                        placeholder="Mot de passe"
                        secureTextEntry
                    />
                    <Button
                        text="Login"
                        onPress={() => login('mickael', 'okcomputer')}
                        style={{color: colors.primary}}
                    />
                </LoginWrapper>
            </SignInContainer>
        </ImageBackground>
    )
}

const QUERY = gql`
    {
        helloWorld
    }
`;

const SignInContainer = styled.View`
    flex: 1;
    align-items: center;
    padding: 10%;
`;

const LoginWrapper = Animatable.createAnimatableComponent(styled.View`
    width: 100%;
    align-items: center;
`)

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
    height: 40px;
    width: 100%;
    padding: 8px 12px;
    border-radius: 5px;
    margin-bottom: 24px;
`;