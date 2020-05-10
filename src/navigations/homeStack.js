import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';

import {HOME, PROFILE} from 'global/constants';
import HomeScreen from 'screens/Home';
import ProfileScreen from '../screens/Profile';
import {screenOptionHeader} from 'global/navigation';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={HOME} screenOptions={screenOptionHeader}>
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen
        name={PROFILE}
        component={ProfileScreen}
        options={{
          headerRight: () => null,
        }}
      />
    </Stack.Navigator>
  );
}
