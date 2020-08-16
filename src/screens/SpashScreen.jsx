import React from 'react';
import { Text, ImageBackground } from 'react-native';
import styled from 'styled-components/native';

export const SplashScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../../assets/background.jpg')} style={{ flex: 1 }}>
            <Container>
                <Text>SplashScreen</Text>
            </Container>
        </ImageBackground>
    )
}

const Container = styled.View`
    flex: 1;
`;