import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppTabsWrapperNavigation } from './AppStack';
import { Drawer, Account } from '../screens';

const AppDrawer = createDrawerNavigator();

export const AppDrawerNavigator = () => {
    return (
        <AppDrawer.Navigator
            drawerPosition="left"
            drawerContent={props => <Drawer {...props}/>}
            openByDefault={false}
            drawerType="slide"
        >
            <AppDrawer.Screen 
                name="App"
                component={AppTabsWrapperNavigation} 
            />
            <AppDrawer.Screen 
                name="Account"
                component={Account} 
            />
        </AppDrawer.Navigator>
    )
}