import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

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

export default function TabResult() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {backgroundColor: '#181C20', marginBottom: 1},
        headerStyle: {backgroundColor: 'white'},
        activeTintColor: '#0084BD',
        inactiveTintColor: '#fff',
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
