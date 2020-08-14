import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext, defaultValue, reducer } from './src/context';
import { SignIn, SignUp, SplashScreen } from './src/screens';
import { AppDrawerNavigator } from './src/navigators';
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Boogaloo_400Regular } from '@expo-google-fonts/boogaloo';
import { Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import { colors } from './src/utils';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo/client';

const RootStack = createStackNavigator();

export default App = () => {
  const [authState, dispatch] = React.useReducer(reducer, defaultValue);

  let [fontsLoaded] = useFonts({
	Ubuntu_400Regular,
	Lato_400Regular,
	Boogaloo_400Regular,
	Ubuntu_700Bold,
	Comfortaa_400Regular // test
  });


  const authContext = React.useMemo(() => ({
    login: (username, password) => {
		dispatch({ type: 'LOADING'});
		if (username === 'mickael' && password === 'okcomputer') {
			const user = { username: 'Mickael' }
			dispatch({ type: 'LOGIN_SUCCESS', payload: user });
			setTimeout(() => dispatch({ type: 'LOADED'}), 500);
		} else {
			dispatch({ type: 'LOGIN_FAILED' });
			setTimeout(() => dispatch({ type: 'LOADED'}), 500);
		}
	},
	logout: () => dispatch({ type: 'LOGOUT' })
  }), []);



  if (!fontsLoaded) {
    return <AppLoading />;
  }


//   console.log('AUTHCONTEXT', authState)
  return (
	<ApolloProvider client={client} >
		<AuthContext.Provider value={authContext}>
			<StatusBar
				barStyle='light-content'
				backgroundColor={colors.primary}
			/>
			<NavigationContainer>
				<RootStack.Navigator initialRouteName="Drawer" screenOptions={{ headerShown: false }}>
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
	</ApolloProvider>
  )
}