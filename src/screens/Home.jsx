import React from 'react';
import { Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components/native';

export const Home = ({ navigation }) => {
    const { logout } = React.useContext(AuthContext);
    return (
        <Container>
            <Text>Home</Text>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;