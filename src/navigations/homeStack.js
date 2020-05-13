import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HOME, PROFILE, LISTCOURSE} from 'global/constants';
import HomeScreen from 'screens/Home';
import ListCourseScreen from 'screens/ListCourse';
import ProfileScreen from 'screens/Profile';
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
      <Stack.Screen
        name={LISTCOURSE}
        component={ListCourseScreen}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
}
