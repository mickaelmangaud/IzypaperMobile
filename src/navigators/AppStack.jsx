import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Feed, Messages, Settings } from '../screens';

const AppTabs = createMaterialTopTabNavigator();
const AppTabsWrapper = createStackNavigator();

const AppTabsNavigator = () => {
    return (
        <AppTabs.Navigator tabBarPosition="bottom">
            <AppTabs.Screen name="Home" component={Home} />
            <AppTabs.Screen name="Feed" component={Feed} />
            <AppTabs.Screen name="Messages" component={Messages} />
            <AppTabs.Screen name="Settings" component={Settings} />
        </AppTabs.Navigator>
    )
}

export const AppTabsWrapperNavigation = () => {
    return (
        <AppTabsWrapper.Navigator>
            <AppTabsWrapper.Screen name = "AppWrapper" component={AppTabsNavigator} />
        </AppTabsWrapper.Navigator>
    )
}