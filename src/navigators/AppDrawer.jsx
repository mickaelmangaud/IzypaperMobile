import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppTabsWrapperNavigation } from './AppStack';

const AppDrawer = createDrawerNavigator();

export const AppDrawerNavigator = () => {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen name="App" component={AppTabsWrapperNavigation} />
        </AppDrawer.Navigator>
    )
}