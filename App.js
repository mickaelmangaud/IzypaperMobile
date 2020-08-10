import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext, defaultValue, reducer } from './src/context';
import { SignIn, SignUp, SplashScreen } from './src/screens';
import { AppDrawerNavigator } from './src/navigators';

const RootStack = createStackNavigator();

export default App = () => {
  const [authState, dispatch] = React.useReducer(reducer, defaultValue);

  const authContext = React.useMemo(() => ({
    login: (username, password) => {
		dispatch({ type: 'LOADING'});
		if (username === 'mickael' && password === 'okcomputer') {
			const user = { username: 'Mickael' }
			dispatch({ type: 'LOGIN_SUCCESS', payload: user });
			setTimeout(() => dispatch({ type: 'LOADED'}), 800);
		} else {
			dispatch({ type: 'LOGIN_FAILED' });
			setTimeout(() => dispatch({ type: 'LOADED'}), 800);
		}
	},
	logout: () => dispatch({ type: 'LOGOUT' })
  }), []);

  console.log('AUTHCONTEXT', authState)

  return (
    <AuthContext.Provider value={authContext}>
    	<NavigationContainer>
			<RootStack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
				{/* <RootStack.Screen name="SignIn" component={SignIn} />
				<RootStack.Screen name="SignUp" component={SignUp} />
				<RootStack.Screen name="Drawer" component={AppDrawerNavigator} /> */}
				{
					authState.isLoading 
					? <RootStack.Screen name="Splash" component={SplashScreen} />
					: authState.isAuthenticated
						? <RootStack.Screen name="Drawer" component={AppDrawerNavigator} />
						: <>
							<RootStack.Screen name="SignIn" component={SignIn} />
							<RootStack.Screen name="SignUp" component={SignUp} />
						  </>
				}
			</RootStack.Navigator>
      	</NavigationContainer>
    </AuthContext.Provider>
  )
}