import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppTabsWrapperNavigation } from './AppStack';
import { Settings } from '../screens';

const AppDrawer = createDrawerNavigator();

export const AppDrawerNavigator = () => {
    return (
        <AppDrawer.Navigator drawerPosition="left">
            <AppDrawer.Screen 
                name="App"
                component={AppTabsWrapperNavigation} 
            />
            <AppDrawer.Screen 
                name="Settings"
                component={Settings} 
            />
        </AppDrawer.Navigator>
    )
}