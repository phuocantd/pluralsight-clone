import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function info({title, count}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{count} courses</Text>
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
});
