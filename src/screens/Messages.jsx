import React from 'react';
import { Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { Container } from '../components';
import { colors } from '../utils';

export const Messages = ({ navigation }) => {
    const { logout } = React.useContext(AuthContext);
    return (
        <Container>
            <Text>Messages</Text>
            <Button 
                title="Disconnect"
                onPress={logout}
                color={colors.primary}
            />
        </Container>
    )
}