import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';

import {
  ALLSEARCHRESULT,
  COURSESSEARCHRESULT,
  PATHSSEARCHRESULT,
  AUTHORSSEARCHRESULT,
} from 'global/constants';
import AllResult from './all';
import CoursesResult from './courses';
import PathsResult from './paths';
import AuthorsResult from './authors';

const Tab = createMaterialTopTabNavigator();

import {ThemeContext} from 'tools/context/theme';

export default function TabResult() {
  const {colors} = React.useContext(ThemeContext);
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: StyleSheet.compose(
          {marginBottom: 1},
          colors.background2,
        ),
        headerStyle: colors.separator,
        activeTintColor: '#0084BD',
        inactiveTintColor: colors.text.color,
      }}>
      <Tab.Screen
        name={ALLSEARCHRESULT}
        component={AllResult}
        options={{title: 'All'}}
      />
      <Tab.Screen
        name={COURSESSEARCHRESULT}
        component={CoursesResult}
        options={{title: 'Courses'}}
      />
      <Tab.Screen
        name={PATHSSEARCHRESULT}
        component={PathsResult}
        options={{title: 'Paths'}}
      />
      <Tab.Screen
        name={AUTHORSSEARCHRESULT}
        component={AuthorsResult}
        options={{title: 'Authors'}}
      />
    </Tab.Navigator>
  );
}
