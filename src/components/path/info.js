import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {ThemeContext} from 'tools/context/theme';

export default function Info({title, count}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text
        style={StyleSheet.compose(
          styles.title,
          colors.text,
        )}>
        {title}
      </Text>
      <Text
        style={StyleSheet.compose(
          styles.info,
          colors.text,
        )}>
        {count} courses
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginLeft: 5},
  title: {fontSize: 15},
  info: {fontSize: 12},
});
