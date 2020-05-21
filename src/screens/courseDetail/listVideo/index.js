import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import Contents from './contents';
import Transcript from './transcript';

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Contents" component={Contents} />
      <Tab.Screen name="Transcript" component={Transcript} />
    </Tab.Navigator>
  );
}
