import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  DOWNLOADS,
  PROFILE,
  SETTINGS,
  CONTACT,
  FEEDBACK,
} from 'global/constants';
import {screenOptionHeader, OptionHeaderRight} from 'global/navigation';
import DownloadsScreen from 'screens/Downloads';
import ProfileScreen from 'screens/Profile';
import SettingsScreen from 'screens/setting';
import ContactScreen from 'screens/contact';
import FeedbackScreen from 'screens/feedback';

const Stack = createStackNavigator();

export default function DownloadsStack() {
  return (
    <Stack.Navigator
      initialRouteName={DOWNLOADS}
      screenOptions={screenOptionHeader}>
      <Stack.Screen
        name={DOWNLOADS}
        component={DownloadsScreen}
        options={OptionHeaderRight}
      />
      <Stack.Screen name={PROFILE} component={ProfileScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={FEEDBACK} component={FeedbackScreen} />
      <Stack.Screen name={CONTACT} component={ContactScreen} />
    </Stack.Navigator>
  );
}
