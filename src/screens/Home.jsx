import React from 'react';
import { Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { Container } from '../components/Container';

export const Home = ({ navigation }) => {
    const { logout } = React.useContext(AuthContext);

    return (
        <Container>
            <Text>Home</Text>
            <Button 
                title="Disconnect"
                onPress={logout}
            />
        </Container>
    )
}