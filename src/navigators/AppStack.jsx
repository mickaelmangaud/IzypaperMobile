import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Feed } from '../screens';

const AppStack = createBottomTabNavigator();

export const AppStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Feed" component={Feed} />
    </AppStack.Navigator>
  )
}