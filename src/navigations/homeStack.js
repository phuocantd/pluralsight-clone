import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HOME,
  LISTCOURSE,
  COURSEDETAIL,
  PROFILE,
  SETTINGS,
  CONTACT,
  FEEDBACK,
} from 'global/constants';
import {screenOptionHeader, OptionHeaderRight} from 'global/navigation';
import HomeScreen from 'screens/Home';
import ListCourseScreen from 'screens/ListCourse';
import CourseDetailScreen from 'screens/courseDetail';
import ProfileScreen from 'screens/Profile';
import SettingsScreen from 'screens/setting';
import ContactScreen from 'screens/contact';
import FeedbackScreen from 'screens/feedback';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={HOME} screenOptions={screenOptionHeader}>
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
        options={OptionHeaderRight}
      />
      <Stack.Screen name={PROFILE} component={ProfileScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={FEEDBACK} component={FeedbackScreen} />
      <Stack.Screen name={CONTACT} component={ContactScreen} />
      <Stack.Screen
        name={LISTCOURSE}
        component={ListCourseScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name={COURSEDETAIL}
        component={CourseDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
