import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Home, Feed, Messages, Settings } from '../screens';

const AppTabs = createMaterialTopTabNavigator();
const AppTabsWrapper = createStackNavigator();

const Header = () => {
    return (
        <SafeAreaView>
            <Text>Ahahaha</Text>
        </SafeAreaView>
    )
}

const AppTabsNavigator = () => {
    return (
        <AppTabs.Navigator 
            tabBarPosition="bottom"
            tabBarOptions={{
                showIcon: true,
            }}
        >
            <AppTabs.Screen name="Home" component={Home}/>
            <AppTabs.Screen name="Feed" component={Feed} />
            <AppTabs.Screen name="Messages" component={Messages} />
            <AppTabs.Screen name="Settings" component={Settings} />
        </AppTabs.Navigator>
    )
}

export const AppTabsWrapperNavigation = () => {
    return (
        <AppTabsWrapper.Navigator>
            <AppTabsWrapper.Screen 
                name="AppWrapper"
                component={AppTabsNavigator}
                options={{
                    headerStyle: {
                        backgroundColor: '#048b9a',
                    },
                    headerTitleAlign: 'center',
                    headerTitle: 'IzyPaper',
                    headerTitleStyle: {
                        color: 'white',
                    },
                }}
            />
        </AppTabsWrapper.Navigator>
    )
}