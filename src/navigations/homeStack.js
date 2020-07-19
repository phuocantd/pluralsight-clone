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
  UPDATEPROFILE,
} from 'global/constants';
import {OptionHeaderRight} from 'global/navigation';
import {ThemeContext} from 'tools/context/theme';
import HomeScreen from 'screens/Home';
import ListCourseScreen from 'screens/ListCourse';
import CourseDetailScreen from 'src/screens/courseDetail';
import ProfileScreen from 'screens/Profile';
import SettingsScreen from 'screens/setting';
import ContactScreen from 'screens/contact';
import FeedbackScreen from 'screens/feedback';
import UpdateProfileScreen from 'screens/updateProfile';

const Stack = createStackNavigator();

export default function HomeStack() {
  const {colors} = React.useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerTintColor: colors.text.color,
        headerStyle: colors.background1,
        headerTitleStyle: colors.text,
      }}>
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
        options={OptionHeaderRight}
      />
      <Stack.Screen name={PROFILE} component={ProfileScreen} />
      <Stack.Screen name={UPDATEPROFILE} component={UpdateProfileScreen} />
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
