import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HOME, LOGIN, SPLASH} from 'global/constants';
import BottomTab from './BottomTabNavigator';
import AuthStack from './authStack';
import SplashScreen from 'screens/splash';
import ImageView from 'containers/ImageView';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SPLASH} component={SplashScreen} />
      <Stack.Screen name={HOME} component={BottomTab} />
      <Stack.Screen name={LOGIN} component={AuthStack} />
      <Stack.Screen
        options={{headerShown: false}}
        name="ImageView"
        component={ImageView}
      />
    </Stack.Navigator>
  );
}
