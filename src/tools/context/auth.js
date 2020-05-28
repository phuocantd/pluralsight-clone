import React, {useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext();

export default function Provider({children}) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            token: action.token,
            isLoading: false,
            isAuth: action.isAuth,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            token: action.token,
            isAuth: true,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            token: null,
            isAuth: false,
          };
      }
    },
    {
      isLoading: true,
      token: null,
      isAuth: false,
    },
  );

  useEffect(() => {
    if (state.isLoading) {
      _bootstrapAsync();
    }
  }, [state]);

  const _bootstrapAsync = async () => {
    let userToken = null;

    try {
      userToken = await AsyncStorage.getItem('token');
    } catch (e) {
      console.log('Restoring token failed');
    }
    const isAuth = userToken !== null;
    dispatch({type: 'RESTORE_TOKEN', token: userToken, isAuth});
  };

  const authContext = React.useMemo(
    () => ({
      signIn: async token => {
        console.log('sign-in:', token);
        // const token = 'phuocantd';
        await AsyncStorage.setItem('token', token);
        dispatch({type: 'SIGN_IN', token});
      },
      signOut: () => {
        console.log('sign out');
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async token => {
        console.log('sign-up:', token);
        // const token = 'phuocantd';
        await AsyncStorage.setItem('token', token);
        dispatch({type: 'SIGN_IN', token});
      },
    }),
    [],
  );
  return (
    <AuthContext.Provider value={{state, authContext}}>
      {children}
    </AuthContext.Provider>
  );
}
