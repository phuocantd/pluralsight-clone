import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SEARCH} from 'global/constants';
import SearchScreen from 'screens/Search';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
}
