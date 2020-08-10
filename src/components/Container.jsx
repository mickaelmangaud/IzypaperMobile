import React from 'react';
import styled from 'styled-components/native';

export const Container = ({ children }) => (
    <ContainerView>
        {children}
    </ContainerView>
)

const ContainerView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;