import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function info({
  title,
  author,
  duration,
  level,
  updated,
  rating,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{author}</Text>
      <Text style={styles.info}>{`${level} ${updated} ${duration}`}</Text>
      {rating > 0 && (
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
  },
  title: {
    color: '#eee',
    fontSize: 15,
  },
  info: {
    color: '#fff',
    fontSize: 12,
  },
  rate: {
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
    marginTop: 3,
  },
});
