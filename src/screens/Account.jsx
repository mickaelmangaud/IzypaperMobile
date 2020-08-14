import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../utils';
import { MaterialIcons } from '@expo/vector-icons';

export const Account = ({ navigation }) => {
    return (
        <AccountContainer>
                <BackLink onPress={() => navigation.navigate('App')} underlayColor='rgba(0,0,0, .1)'>
                    <>
                        <MaterialIcons name="chevron-left" size={26} color={colors.primary}  />
                        <Text style={{ color: colors.primary, bottom: 1 }}>Retour à l'application</Text>
                    </>
                </BackLink>
            <AcountTitle>Mon Compte</AcountTitle>
        </AccountContainer>
    )
}

const AccountContainer = styled.View`
    padding: 21% 12%;
`;

const BackLink = styled(TouchableHighlight)`
    position: absolute;
    flex-direction: row;
    align-items: center;
    top: 20px;
    left: 10px;
    padding: 4px;
    border-radius: 4px;
    width: 175px;
`;

const AcountTitle = styled.Text`
    color: ${colors.primary};
    font-size: 32px;
    font-family: 'Ubuntu_400Regular';
`;