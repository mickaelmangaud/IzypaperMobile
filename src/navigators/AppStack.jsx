import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Home, Feed, Settings, Messages } from '../screens';

const AppStack = createMaterialTopTabNavigator();

export const AppStackNavigator = () => {
  return (
    <AppStack.Navigator 
		tabBarPosition="bottom"
		tabBarOptions={{
			showIcon: true,
			labelStyle: {
				fontSize: 12,
				textTransform: "capitalize",
			},
		}}
		screenOptions={{
			tabBarIcon: props => {
				console.log('props', props)
			}
		}}
	>
    	<AppStack.Screen name="Home" component={Home} />
      	<AppStack.Screen name="Feed" component={Feed} />
      	<AppStack.Screen name="Messages" component={Messages} />
      	<AppStack.Screen name="Settings" component={Settings} />
    </AppStack.Navigator>
  )
}