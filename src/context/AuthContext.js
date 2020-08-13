import React from 'react';

export const AuthContext = React.createContext();

export const defaultValue = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
}

export const reducer = (state, action) => {
	switch (action.type) {
    	case 'LOGIN_SUCCESS':
        	return {
            	...state,
        		isAuthenticated: true,
            	user: action.payload,
          	}
      	case 'LOGIN_FAILED':
        	return {
            	...state,
              	isAuthenticated: false,
              	user: null,
		  	}
		case 'LOGOUT':
			return {
				...state,
				isAuthenticated: false,
				user: null,
			}
		case 'LOADING':
			return {
				...state,
				isLoading: true,
			}
		case 'LOADED':
			return {
				...state,
				isLoading: false,
			}

      default:
        return state;
  }
}