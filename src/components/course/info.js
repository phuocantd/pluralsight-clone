import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {format} from 'date-fns';

import {ThemeContext} from 'tools/context/theme';
// import Rate from '../rate';

export default function Info({
  learnWhat,
  title,
  author,
  duration,
  level,
  updated,
  rating,
}) {
  const {colors} = React.useContext(ThemeContext);
  console.log('rating', rating);
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
        {author || learnWhat}
      </Text>
      {updated && (
        <Text
          style={StyleSheet.compose(
            styles.info,
            colors.text,
          )}>
          {`${duration}h ${format(new Date(updated), 'dd/MM/yyyy')} ${
            level ? level : ''
          }`}
        </Text>
      )}
      {/* <Rate rate={rating} /> */}
      <Text
        style={StyleSheet.compose(
          styles.info,
          colors.text,
        )}>
        Rate: {rating}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginLeft: 5},
  title: {fontSize: 15},
  info: {fontSize: 12},
});
