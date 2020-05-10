import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator();

import HomeStack from './homeStack';
import DownloadsStack from './downloadsStack';
import BrowseStack from './browseStack';
import SearchStack from './searchStack';
import {HOME, DOWNLOADS, BROWSE, SEARCH} from 'global/constants';

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      tabBarOptions={{
        activeTintColor: '#0084bd',
        activeBackgroundColor: '#0D0F12',
        inactiveBackgroundColor: '#0D0F12',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name={HOME}
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconMaterial name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={DOWNLOADS}
        component={DownloadsStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconMaterial
              name="arrow-down-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={BROWSE}
        component={BrowseStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconFontisto name="nav-icon-grid" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={SEARCH}
        component={SearchStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconFontisto name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
