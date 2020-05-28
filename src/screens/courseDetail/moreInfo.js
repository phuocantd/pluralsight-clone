import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ThemeContext} from 'tools/context/theme';

export default function MoreInfo({level, updated, duration, rating}) {
  const {colors} = React.useContext(ThemeContext);

  const compose = StyleSheet.compose(
    styles.info,
    colors.text,
  );
  return (
    <View style={styles.container}>
      <Text style={compose}>{level}</Text>
      <Text style={compose}>{updated}</Text>
      <Text style={compose}>{duration}</Text>
      <View style={styles.rate}>
        <View style={styles.star}>
          <Icon name="star" color="#FAD000" size={13} />
          <Icon name="star" color="#FAD000" size={13} />
          <Icon name="star" color="#FAD000" size={13} />
          <Icon name="star" color="#FAD000" size={13} />
          <Icon name="star-half-full" color="#FAD000" size={13} />
        </View>
        <Text style={compose}>({rating})</Text>
      </View>
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
