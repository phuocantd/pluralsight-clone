/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, View} from 'react-native';
import _ from 'lodash';

import {
  // ALLSEARCHRESULT,
  COURSESSEARCHRESULT,
  // PATHSSEARCHRESULT,
  AUTHORSSEARCHRESULT,
} from 'global/constants';
// import AllResult from './all';
import CoursesResult from './courses';
// import PathsResult from './paths';
import AuthorsResult from './authors';

const Tab = createMaterialTopTabNavigator();

import {ThemeContext} from 'tools/context/theme';

export default function TabResult({data, navigation}) {
  const {colors} = React.useContext(ThemeContext);

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        style={{flex: 1}}
        tabBarOptions={{
          tabStyle: StyleSheet.compose(
            {marginBottom: 1},
            colors.background2,
          ),
          headerStyle: colors.separator,
          activeTintColor: '#0084BD',
          inactiveTintColor: colors.text.color,
        }}>
        {/* <Tab.Screen
        name={ALLSEARCHRESULT}
        children={() => <AllResult data={data} navigation={navigation} />}
        // component={AllResult}
        options={{title: 'All'}}
      /> */}
        <Tab.Screen
          name={COURSESSEARCHRESULT}
          // component={CoursesResult}
          children={() => (
            <CoursesResult
              data={_.get(data, 'courses', {})}
              navigation={navigation}
            />
          )}
          options={{title: `Khóa học: ${_.get(data, 'courses.total', 0)}`}}
        />
        {/* <Tab.Screen
        name={PATHSSEARCHRESULT}
        component={PathsResult}
        options={{title: 'Paths'}}
      /> */}
        <Tab.Screen
          name={AUTHORSSEARCHRESULT}
          // component={AuthorsResult}
          children={() => (
            <AuthorsResult
              data={_.get(data, 'instructors', {})}
              navigation={navigation}
            />
          )}
          options={{title: `Tác giả: ${_.get(data, 'instructors.total', 0)}`}}
        />
      </Tab.Navigator>
    </View>
  );
}
