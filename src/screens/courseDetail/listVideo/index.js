import React from 'react';
import {View, StyleSheet} from 'react-native';

import {ThemeContext} from 'tools/context/theme';
import Contents from './contents';
import Transcript from './transcript';

export default function MyTabs({isContent}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View
      style={StyleSheet.compose(
        {paddingHorizontal: 20},
        colors.container,
      )}>
      {isContent ? <Contents /> : <Transcript />}
    </View>
  );
}
