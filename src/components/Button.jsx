import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../utils';

export const Button = ({ text, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{width: '100%'}}>
            <ButtonView style={[style, { elevation: 0 }]}>
                <ButtonText style={{color: style.color || colors.primary }}>
                    {text}
                </ButtonText>
            </ButtonView>
        </TouchableOpacity>
    )
}

const ButtonText = styled.Text`
    color: ${colors.primary};
    text-align: center;
    padding: 8px 12px;
    text-transform: uppercase;
    font-family: 'Ubuntu_400Regular';
`;

const ButtonView = styled.View`
    justify-content: center;
    background-color: white;
    /* width: 100%; */
    height: 40px;
    border-radius: 50px;
`;