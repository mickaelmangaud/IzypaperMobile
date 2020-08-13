import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons/';
import { Home, Feed, Messages, Settings } from '../screens';

const AppTabs = createMaterialTopTabNavigator();
const AppTabsWrapper = createStackNavigator();

const AppTabsNavigator = () => {
    return (
        <AppTabs.Navigator 
            tabBarPosition="bottom"
            tabBarOptions={{
                showIcon: true,
                labelStyle: {
                    textTransform: 'capitalize',
                    fontSize: 10,
                    color: 'white'
                },
                tabStyle: {
                    backgroundColor: '#048b9a',
                }
            }}
        >
            <AppTabs.Screen
                name="Accueil"
                component={Home}
                options={{
                    tabBarIcon: () => <MaterialIcons name="home" size={26} color="white" />
                }}
            />

            <AppTabs.Screen
                name="Documents"
                component={Feed} 
                options={{
                    tabBarIcon: () => <MaterialIcons name="insert-drive-file" size={26} color="white" />
                }}
            />

            <AppTabs.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarIcon: () => <MaterialIcons name="chat-bubble" size={26} color="white" />
                }}
            />

            <AppTabs.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: () => <MaterialIcons name="settings" size={26} color="white" />
                }}
            />
        </AppTabs.Navigator>
    )
}

export const AppTabsWrapperNavigation = ({ navigation }) => {
    return (
        <AppTabsWrapper.Navigator>
            <AppTabsWrapper.Screen 
                name="AppWrapper"
                component={AppTabsNavigator}
                
                options={{
                    headerStyle: {
                        backgroundColor: '#048b9a',
                    },
                    headerTitleAlign: 'left',
                    headerTitle: 'IzyPaper',
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerRight: () => <MaterialIcons
                                            name="menu"
                                            size={26}
                                            color="white"
                                            style={{ right: 12, top: 2 }}
                                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                        />
                }}
            />
        </AppTabsWrapper.Navigator>
    )
}