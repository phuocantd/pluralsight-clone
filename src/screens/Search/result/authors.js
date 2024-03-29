import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {AUTHORDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import {listTopAuthor} from 'data/browse';
import ListAuthor from 'components/lists/authors';

export default function Authors({navigation}) {
  const {colors} = React.useContext(ThemeContext);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <Text
        style={StyleSheet.compose(
          styles.result,
          colors.text,
        )}>
        {listTopAuthor.list.length} Result
      </Text>
      <ListAuthor
        items={listTopAuthor.list}
        handleDetail={() => navigation.navigate(AUTHORDETAIL)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  result: {fontSize: 13, marginTop: 20, marginLeft: 20},
});
