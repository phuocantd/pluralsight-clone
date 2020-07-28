import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {ThemeContext} from 'tools/context/theme';

export default function Info({title, author}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={2}
        style={StyleSheet.compose(
          styles.title,
          colors.placeHolder,
        )}>
        {title}
      </Text>
      <Text
        style={StyleSheet.compose(
          styles.info,
          colors.text,
        )}>
        {author}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginLeft: 5},
  title: {fontSize: 15},
  info: {fontSize: 12},
});
