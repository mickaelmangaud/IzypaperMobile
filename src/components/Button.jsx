import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{width: '100%'}}>
            <ButtonView>
                <ButtonText>
                    {text}
                </ButtonText>
            </ButtonView>
        </TouchableOpacity>
    )
}

const ButtonText = styled.Text`
    color: #048b9a;
    text-align: center;
    padding: 8px 12px;
    text-transform: uppercase;
    font-family: 'Ubuntu_700Bold';
`;

const ButtonView = styled.View`
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 40px;
    border-radius: 5px;
`;