import React from 'react';
import { Dimensions, TouchableOpacity, ImageBackground, View } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../utils';
import * as Animatable from 'react-native-animatable';

export const Welcome = ({ navigation }) => {
    return (
        <Container>

            <ImageBackground source={require('../../assets/background.jpg')} style={{ flex: 1, height: '100%', width: '100%' }}>
                <Banner>
                    <Logo
                        animation="bounceIn"
                        delay={600}
                        duration={1800}
                        useNativeDriver={true}
                        >
                            Izypaper
                    </Logo>
                </Banner>
            </ImageBackground>

            <Buttons animation="fadeInUpBig" duration={600} useNativeDriver={true}>
                <Question>Que voulez-vous faire ?</Question>
            
                <Animatable.View
                    animation="fadeInRightBig"
                    delay={400}
                    duration={600}
                >
                    <SignInButton onPress={() => navigation.navigate('SignIn')}>
                        <ButtonText>Me connecter</ButtonText>
                    </SignInButton>
                </Animatable.View>
            
                <Animatable.View
                    animation="fadeInRightBig"
                    delay={700}
                    duration={600}
                >
                    <RegisterButton onPress={() => navigation.navigate('Register')}>
                        <ButtonText>Créer un compte</ButtonText>
                    </RegisterButton>
                </Animatable.View>

            </Buttons>

        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;

const Banner = styled.View`
    /* background-color: ${colors.primary}; */
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Logo = Animatable.createAnimatableComponent(styled.Text`
    color: white;
    margin-bottom: 85%;
    font-size: 48px;
    font-family: 'Ubuntu_700Bold';
`);

const Buttons = Animatable.createAnimatableComponent(styled.View`
    position: absolute;
    bottom: 0;
    background-color: white;
    height: ${Dimensions.get('window').height/2}px;
    width: 100%;
    border-radius: 30px;
    bottom: -50px;
    padding: 24px;
`);

const Question = styled.Text`
    font-size: 20px;
    color: ${colors.primary};
    font-family: 'Ubuntu_400Regular';
    margin-bottom: 36px;
`;

const SignInButton = styled(TouchableOpacity)`
    background-color: ${colors.primary};
    padding: 12px 18px;
    border-radius: 50px;
    elevation: 1;
    margin-top: 24px;
    width: 60%;
    align-self: flex-end;
    align-items: center;
`;

const RegisterButton = styled(TouchableOpacity)`
    background-color: ${colors.primary};
    padding: 12px 18px;
    border-radius: 50px;
    elevation: 1;
    margin-top: 24px;
    width: 60%;
    align-self: flex-end;
    align-items: center;
`;

const ButtonText = styled.Text`
    color: white;
    text-transform: uppercase;
`;