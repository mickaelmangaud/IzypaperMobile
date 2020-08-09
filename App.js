import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackNavigator, AppStackNavigator } from './src/navigators';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SplashScreen } from './src/screens';
import { AuthContext, defaultValue, reducer } from './src/context';

const MyDrawerNavigation = createDrawerNavigator();

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
			{authState.isLoading
				? <SplashScreen />
				: !authState.isAuthenticated 
					? <AuthStackNavigator />
					: <MyDrawerNavigation.Navigator>
						<MyDrawerNavigation.Screen name="App" component={AppStackNavigator} />
					  </MyDrawerNavigation.Navigator>
			}
      	</NavigationContainer>
    </AuthContext.Provider>
  )
}