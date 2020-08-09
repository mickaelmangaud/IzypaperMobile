import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Feed, Settings, Messages } from '../screens';

const AppStackTopBar = createMaterialTopTabNavigator();
const AppStack = createStackNavigator();

const AppStackScreens = () => {
  return (
    <AppStackTopBar.Navigator 
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
    	<AppStackTopBar.Screen name="Home" component={Home} />
      	<AppStackTopBar.Screen name="Feed" component={Feed} />
      	<AppStackTopBar.Screen name="Messages" component={Messages} />
      	<AppStackTopBar.Screen name="Settings" component={Settings} />
    </AppStackTopBar.Navigator>
  )
}

export const AppStackNavigator = () => {
	return (
		<AppStack.Navigator>
			<AppStack.Screen name="test" component={AppStackScreens} />
		</AppStack.Navigator>
	)
}