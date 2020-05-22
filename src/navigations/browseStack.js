import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {BROWSE, PROFILE, PATHS, LISTPATH, PATHDETAIL} from 'global/constants';
import {screenOptionHeader, optionHeaderRight} from 'global/navigation';
import BrowseScreen from 'screens/Browse';
import ProfileScreen from 'screens/Profile';
import PathsScreen from 'screens/paths';
import ListPathScreen from 'screens/listPath';
import PathDetailScreen from 'screens/pathDetail';

const Stack = createStackNavigator();

export default function BrowseStack() {
  return (
    <Stack.Navigator
      initialRouteName={BROWSE}
      screenOptions={screenOptionHeader}>
      <Stack.Screen
        name={BROWSE}
        component={BrowseScreen}
        options={optionHeaderRight}
      />
      <Stack.Screen name={PROFILE} component={ProfileScreen} />
      <Stack.Screen name={PATHS} component={PathsScreen} />
      <Stack.Screen
        name={LISTPATH}
        component={ListPathScreen}
        options={({navigation, route}) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name={PATHDETAIL}
        component={PathDetailScreen}
        options={({navigation, route}) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
}
