import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function Path({item}) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => console.log(`${item.name} clicked!!!`)}>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#1E2429',
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  name: {
    marginHorizontal: 5,
    color: '#fff',
    fontSize: 15,
  },
});
