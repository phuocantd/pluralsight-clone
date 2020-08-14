import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  DOWNLOADS,
  PROFILE,
  SETTINGS,
  CONTACT,
  FEEDBACK,
  UPDATEPROFILE,
  RATING,
} from 'global/constants';
import {OptionHeaderRight} from 'global/navigation';
import {ThemeContext} from 'tools/context/theme';
import DownloadsScreen from 'screens/Downloads';
import ProfileScreen from 'screens/Profile';
import SettingsScreen from 'screens/setting';
import ContactScreen from 'screens/contact';
import FeedbackScreen from 'screens/feedback';
import UpdateProfileScreen from 'screens/updateProfile';
import Rating from 'screens/Rating';

const Stack = createStackNavigator();

export default function DownloadsStack() {
  const {colors} = React.useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName={DOWNLOADS}
      screenOptions={{
        headerTintColor: colors.text.color,
        headerStyle: colors.background1,
        headerTitleStyle: colors.text,
      }}>
      <Stack.Screen
        name={DOWNLOADS}
        component={DownloadsScreen}
        options={OptionHeaderRight}
      />
      <Stack.Screen name={PROFILE} component={ProfileScreen} />
      <Stack.Screen name={UPDATEPROFILE} component={UpdateProfileScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={FEEDBACK} component={FeedbackScreen} />
      <Stack.Screen name={CONTACT} component={ContactScreen} />
      <Stack.Screen name={RATING} component={Rating} />
    </Stack.Navigator>
  );
}
