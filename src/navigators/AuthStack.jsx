import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp } from '../screens';

const AuthStack = createStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  )
}