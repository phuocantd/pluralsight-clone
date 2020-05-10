import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {DOWNLOADS, PROFILE} from 'global/constants';
import DownloadsScreen from 'screens/Downloads';
import AuthStack from './authStack';
import {screenOptionHeader} from 'global/navigation';

const Stack = createStackNavigator();

export default function DownloadsStack() {
  return (
    <Stack.Navigator
      initialRouteName={DOWNLOADS}
      screenOptions={screenOptionHeader}>
      <Stack.Screen name={DOWNLOADS} component={DownloadsScreen} />
      {/* <Stack.Screen
        name={PROFILE}
        component={AuthStack}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
