import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import BottomTabNavigator from './navigations/BottomTabNavigator';
import AppNavigator from './navigations/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
