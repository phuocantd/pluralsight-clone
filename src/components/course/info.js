import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {format} from 'date-fns';

import {ThemeContext} from 'tools/context/theme';
import Rate from '../rate';

export default function Info({
  title,
  author,
  duration,
  level,
  updated,
  rating,
}) {
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
      <Text
        style={StyleSheet.compose(
          styles.info,
          colors.text,
        )}>{`${duration}h ${format(
        new Date(updated),
        'dd/MM/yyyy',
      )} ${level}`}</Text>
      <Rate rate={rating} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginLeft: 5},
  title: {fontSize: 15},
  info: {fontSize: 12},
});
