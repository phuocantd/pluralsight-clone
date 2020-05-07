import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from './navigations/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
