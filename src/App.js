import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';

// import BottomTabNavigator from './navigations/BottomTabNavigator';
import AppNavigator from './navigations/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MenuProvider>
        <AppNavigator />
      </MenuProvider>
    </NavigationContainer>
  );
}
