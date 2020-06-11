import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';

// import BottomTabNavigator from './navigations/BottomTabNavigator';
import AppNavigator from './navigations/AppNavigator';
import AuthProvider from './tools/context/auth';
import ThemeProvider from './tools/context/theme';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <MenuProvider>
            <AppNavigator />
          </MenuProvider>
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}
