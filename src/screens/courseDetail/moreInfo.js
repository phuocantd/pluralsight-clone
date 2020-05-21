import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MoreInfo({level, updated, duration, rating}) {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>{level}</Text>
      <Text style={styles.info}>{updated}</Text>
      <Text style={styles.info}>{duration}</Text>
      <View style={styles.rate}>
        <View style={styles.star}>
          <Icon name="star" color="#FAD000" size={13} />
          <Icon name="star" color="#FAD000" size={13} />
          <Icon name="star" color="#FAD000" size={13} />
          <Icon name="star" color="#FAD000" size={13} />
          <Icon name="star-half-full" color="#FAD000" size={13} />
        </View>
        <Text style={styles.info}>({rating})</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  info: {
    color: '#fff',
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
