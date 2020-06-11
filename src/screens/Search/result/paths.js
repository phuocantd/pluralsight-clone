import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {PATHDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import {listPath} from 'data/browse';
import ListPath from 'components/lists/paths';

export default function Paths({navigation}) {
  const {colors} = React.useContext(ThemeContext);

  const handleDetailPath = () =>
    navigation.navigate(PATHDETAIL, {title: 'Angular denver 2019'});
  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <Text
        style={StyleSheet.compose(
          styles.text,
          colors.text,
        )}>
        {listPath.list.length} Result
      </Text>
      <ListPath items={listPath.list} handleDetail={handleDetailPath} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {fontSize: 13, marginLeft: 20, marginTop: 20},
});
