import React from 'react';
import {View, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {PATHDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import ListPath from 'components/lists/paths';

export default function ListPathScreen({route, navigation}) {
  const {colors} = React.useContext(ThemeContext);
  const {items} = route.params;

  const handleDetailPath = () =>
    navigation.navigate(PATHDETAIL, {title: 'Angular denver 2019'});

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <ListPath items={items} handleDetail={handleDetailPath} />
    </View>
  );
}
