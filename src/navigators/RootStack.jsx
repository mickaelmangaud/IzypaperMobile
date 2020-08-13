import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, S, SignUp } from '../screens';
import { AppDrawerNavigator } from './AppDrawer';

const RootStack = createStackNavigator();

export function RootStackNavigator() {
  return (
    <RootStack.Navigator 
      initialRouteName="SignIn"
      screenOptions={{ 
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal'
      }}
      headerMode="float"
    >
      <RootStack.Screen name="SignIn" component={SignIn} />
      <RootStack.Screen name="SignUp" component={SignUp} />
      <RootStack.Screen name="Drawer" component={AppDrawerNavigator} />
    </RootStack.Navigator>
  );
}