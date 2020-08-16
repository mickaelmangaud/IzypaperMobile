import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

export const Messages = ({ navigation }) => {
    return (
        <Container>
            <Text>Messages</Text>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;