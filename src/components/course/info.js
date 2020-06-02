import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ThemeContext} from 'tools/context/theme';

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
        )}>{`${level} ${updated} ${duration}`}</Text>
      {rating > 0 && (
        <View style={styles.rate}>
          <View style={styles.star}>
            <Icon name="star" color="#FAD000" size={13} />
            <Icon name="star" color="#FAD000" size={13} />
            <Icon name="star" color="#FAD000" size={13} />
            <Icon name="star" color="#FAD000" size={13} />
            <Icon name="star-half-full" color="#FAD000" size={13} />
          </View>
          <Text
            style={StyleSheet.compose(
              styles.info,
              colors.text,
            )}>
            ({rating})
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginLeft: 5},
  title: {fontSize: 15},
  info: {fontSize: 12},
  rate: {flexDirection: 'row'},
  star: {flexDirection: 'row', marginTop: 3},
});
