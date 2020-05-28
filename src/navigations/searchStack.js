import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SEARCH, PATHDETAIL, AUTHORDETAIL, COURSEDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import SearchScreen from 'screens/Search';
import PathDetailScreen from 'screens/pathDetail';
import AuthorDetailScreen from 'screens/authorDetail';
import CourseDetailScreen from 'screens/courseDetail';

const Stack = createStackNavigator();

export default function SearchStack() {
  const {colors} = React.useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName={SEARCH}
      screenOptions={{
        headerTintColor: colors.text.color,
        headerStyle: colors.background1,
        headerTitleStyle: colors.text,
      }}>
      <Stack.Screen
        name={SEARCH}
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={PATHDETAIL}
        component={PathDetailScreen}
        options={({navigation, route}) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name={AUTHORDETAIL}
        component={AuthorDetailScreen}
        options={({navigation, route}) => ({
          title: 'Author',
        })}
      />
      <Stack.Screen
        name={COURSEDETAIL}
        component={CourseDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
