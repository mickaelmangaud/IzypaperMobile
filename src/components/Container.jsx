import React from 'react';
import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';
import { background } from '../../assets';
import { colors } from '../utils';

export const Container = ({ children }) => (
    <ContainerView>
        {/* <ImageBackground source={require('../../assets/background.jpg')} style={{ width: '100%', height: '100%', flex: 1 }}> */}
            {children}
        {/* </ImageBackground> */}
    </ContainerView>
)

const ContainerView = styled.View`
    flex: 1;
    /* justify-content: center; */
    /* align-items: center; */
    /* background-color: rgba(4, 139, 154, 1); */
`;