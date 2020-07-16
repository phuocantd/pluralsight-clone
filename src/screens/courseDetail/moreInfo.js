import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {format} from 'date-fns';

import {ThemeContext} from 'tools/context/theme';
import Rate from 'src/components/rate';

export default function MoreInfo({level, updated, duration, rating}) {
  const {colors} = React.useContext(ThemeContext);

  const compose = StyleSheet.compose(
    styles.info,
    colors.text,
  );
  return (
    <View style={styles.container}>
      <Text style={compose}>{level}</Text>
      <Text style={compose}>{format(new Date(updated), 'dd/MM/yyyy')}</Text>
      <Text style={compose}>{duration}</Text>
      <Rate rate={rating} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  info: {
    fontSize: 13,
    marginRight: 10,
  },
  rate: {
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
});
