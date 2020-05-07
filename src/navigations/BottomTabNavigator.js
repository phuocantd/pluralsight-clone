import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator();

import HomeScreen from 'screens/Home';
import DownloadsScreen from 'screens/Downloads';
import BrowseScreen from 'screens/Browse';
import SearchScreen from 'screens/Search';
import {HOME, DOWNLOADS, BROWSE, SEARCH} from 'constants';

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      tabBarOptions={{
        activeTintColor: '#0084bd',
        activeBackgroundColor: '#0D0F12',
        inactiveBackgroundColor: '#0D0F12',
      }}>
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconMaterial name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={DOWNLOADS}
        component={DownloadsScreen}
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
        component={BrowseScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconFontisto name="nav-icon-grid" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconFontisto name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
