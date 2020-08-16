import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Dimensions, Text, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { AuthContext } from '../context';
import { DrawerActions } from '@react-navigation/native';
import { colors } from '../utils';
import { MaterialIcons } from '@expo/vector-icons';

export const Drawer = ({ navigation }) => {
    const { logout } = React.useContext(AuthContext);
    const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer());
    const gotToAccountScreen = () => navigation.navigate('Account');

    return (
        <DrawerContainer>
            <DrawerContentScrollView style={{width: '100%'}}>

                {/* UserInfos View */}
                <UserInfos>
                    <UserAvatar source={{ uri: 'https://file1.closermag.fr/var/closermag/storage/images/bio-people/biographie-emmanuel-macron-389948/3299342-2-fre-FR/Emmanuel-Macron.jpg?alias=square500x500&size=x100&format=webp'}} />
                    <UserName>Emmanuel Macron</UserName>
                    <UserEmail>manu@izypaper.com</UserEmail>
                </UserInfos>
                
                {/* ShortCuts View */}
                <ShortCuts>
                    <Divider />
                    <DeconnectLink onPress={logout}>
                        <MaterialIcons name="exit-to-app" size={22} color={colors.primary} />
                        <Text style={{ color: colors.primary, marginLeft: 8 }}>Déconnexion</Text>
                    </DeconnectLink>
                </ShortCuts>

            </DrawerContentScrollView>
        </DrawerContainer>
    )
}

const DrawerContainer = styled.View`
    flex: 1;
    align-items: center;
`;

const UserAvatar = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin-top: 32px;
    border-color: ${colors.primary};
    border-width: 1px;
`;

const UserInfos = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    height: ${Dimensions.get('window').height/2}px;
`;

const UserName = styled.Text`
    font-family: 'Lato_400Regular';
    margin-top: 14px;
    font-size: 24px;
`;

const UserEmail = styled.Text`
    font-family: 'Boogaloo_400Regular';
    margin-top: 2px;
    color: ${colors.primary};
    font-size: 16px;
`;

const ShortCuts = styled.View`
    height: ${(Dimensions.get('window').height/2 - 48)}px;
    justify-content: flex-end;
    padding: 0 5%;
`;

const Divider = styled.View`
    border-bottom-color: ${colors.primary};
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

const DeconnectLink = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
`;