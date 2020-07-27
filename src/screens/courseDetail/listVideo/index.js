import React from 'react';
import {View, StyleSheet} from 'react-native';
import _ from 'lodash';

import {ThemeContext} from 'tools/context/theme';
import Contents from './contents';
import Transcript from './transcript';

export default function MyTabs({
  isContent,
  sections,
  lesson,
  handlePressLesson,
}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <View
      style={StyleSheet.compose(
        {paddingHorizontal: 20},
        colors.container,
      )}>
      {isContent ? (
        <Contents sections={sections} handlePressLesson={handlePressLesson} />
      ) : (
        <Transcript lesson={lesson} />
      )}
    </View>
  );
}
