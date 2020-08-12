import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator();

import HomeStack from './homeStack';
// import DownloadsStack from './downloadsStack';
import BrowseStack from './browseStack';
import SearchStack from './searchStack';
import {HOME, BROWSE, SEARCH} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';

export default function BottomTabNavigator() {
  const {colors} = React.useContext(ThemeContext);

  return (
    <Tab.Navigator
      initialRouteName={HOME}
      tabBarOptions={{
        activeTintColor: colors.btn.borderColor,
        activeBackgroundColor: colors.background1.backgroundColor,
        inactiveBackgroundColor: colors.background1.backgroundColor,
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
      {/* <Tab.Screen
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
      /> */}
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
