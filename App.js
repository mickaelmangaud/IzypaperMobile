import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackNavigator, AppStackNavigator } from './src/navigators';
import { SplashScreen } from './src/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext, defaultValue, reducer } from './src/context';

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

  return (
    <AuthContext.Provider value={authContext}>
    	<NavigationContainer>
			<RootStack.Navigator>
				{authState.isLoading
					? <RootStack.Screen
						name="Splash"
						component={SplashScreen}
						options={{ headerShown: false }}
					/>
					: authState.isAuthenticated 
						? <RootStack.Screen name="App" component={AppStackNavigator} options={{ headerTitle: "IzyPaper" }}/>
						: <RootStack.Screen 
							name="Auth"
							component={AuthStackNavigator}
							options={{ headerShown: false }}
						/>
				}
			</RootStack.Navigator>
      	</NavigationContainer>
    </AuthContext.Provider>
  )
}