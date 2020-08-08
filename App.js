import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackNavigator, AppStackNavigator } from './src/navigators';
import { AuthContext } from './src/context/AuthContext';

const defaultValue = {
  isAuthenticated: false,
}

const reducer = (state, action) => {
  switch (action.type) {
      case 'TOGGLE_IS_AUTHENTICATED':
          return {
              ...state,
              isAuthenticated: !state.isAuthenticated
          }
      default:
        return state;
  }
}

export default App = () => {
  const [authState, dispatch] = React.useReducer(reducer, defaultValue);

  const authContext = React.useMemo(() => ({
    toggleisAuthenticated: () => dispatch({ type: 'TOGGLE_IS_AUTHENTICATED'}),
  }), []);


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {authState.isAuthenticated 
          ? <AppStackNavigator />
          : <AuthStackNavigator />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}