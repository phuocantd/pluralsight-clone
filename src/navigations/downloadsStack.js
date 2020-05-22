import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {DOWNLOADS, PROFILE} from 'global/constants';
import DownloadsScreen from 'screens/Downloads';
import ProfileScreen from 'screens/Profile';
import {screenOptionHeader, optionHeaderRight} from 'global/navigation';

const Stack = createStackNavigator();

export default function DownloadsStack() {
  return (
    <Stack.Navigator
      initialRouteName={DOWNLOADS}
      screenOptions={screenOptionHeader}>
      <Stack.Screen
        name={DOWNLOADS}
        component={DownloadsScreen}
        options={optionHeaderRight}
      />
      <Stack.Screen name={PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
}
