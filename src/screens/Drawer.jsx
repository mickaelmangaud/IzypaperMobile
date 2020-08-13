import React from 'react';
import { DrawerContent, DrawerContentScrollView,  } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons/';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { AuthContext } from '../context';
import { DrawerActions } from '@react-navigation/native';

export const Drawer = ({ navigation }) => {
    const { logout } = React.useContext(AuthContext);
    const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer());

    return (
        <DrawerContainer>
            <DrawerContentScrollView style={{width: '100%'}}>
                <UserInfos>
                    <MaterialIcons 
                        name="exit-to-app"
                        size={18}
                        color="#048b9a" 
                        style={{
                            position: 'absolute',
                            left: 10,
                            top: 10,
                        }}
                        onPress={logout}
                    />
                    <MaterialIcons 
                        name="close"
                        size={18}
                        color="#048b9a" 
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 10,
                        }}
                        onPress={toggleDrawer}
                    />
                    <Image 
                        source={require('../../assets/avatar.png')}
                        style={{
                            width: 200,
                            height: 200,
                            borderRadius: 200/2,
                            marginTop: 20,
                            borderColor: '#048b9a',
                            borderWidth: 1
                        }}
                    />
                    <UserName>Mickael Mangaud</UserName>
                    <UserEmail>mickael@izypaper.com</UserEmail>
                </UserInfos>
            </DrawerContentScrollView>
        </DrawerContainer>
    )
}

const DrawerContainer = styled.View`
    flex: 1;
    align-items: center;
`;

const UserInfos = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UserName = styled.Text`
    font-family: 'Lato_400Regular';
    margin-top: 14px;
    font-size: 18px;
`;

const UserEmail = styled.Text`
    font-family: 'Boogaloo_400Regular';
    margin-top: 2px;
    color: #048b9a;
    font-size: 12px;
`;