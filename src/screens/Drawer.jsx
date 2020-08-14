import React from 'react';
import { DrawerContentScrollView,  } from '@react-navigation/drawer';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';
import { AuthContext } from '../context';
import { DrawerActions } from '@react-navigation/native';
import { colors } from '../utils';
import { Button } from '../components';
import * as Animatable from 'react-native-animatable';

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
                    <Text>Messages</Text>
                    <AccountButton text="Mon Compte" onPress={gotToAccountScreen}/>
                    <SignOutButton text="Déconnexion" onPress={logout}/>
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

const AccountButton = styled(Button)`
    background-color: rgba(0,0,0, .03);
    height: 32px;
    align-self: center;
    margin-bottom: 12px;
`;

const SignOutButton = styled(Button)`
    background-color: rgba(0,0,0, .03);
    height: 32px;
    align-self: center;
`;