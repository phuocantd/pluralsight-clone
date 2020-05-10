import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {BROWSE, PROFILE} from 'global/constants';
import BrowseScreen from 'screens/Browse';
import AuthStack from './authStack';
import {screenOptionHeader} from 'global/navigation';

const Stack = createStackNavigator();

export default function BrowseStack() {
  return (
    <Stack.Navigator
      initialRouteName={BROWSE}
      screenOptions={screenOptionHeader}>
      <Stack.Screen name={BROWSE} component={BrowseScreen} />
      <Stack.Screen
        name={PROFILE}
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
