import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HOME, LOGIN} from 'global/constants';
import BottomTab from './BottomTabNavigator';
import AuthStack from './authStack';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HOME} component={BottomTab} />
      <Stack.Screen name={LOGIN} component={AuthStack} />
    </Stack.Navigator>
  );
}
