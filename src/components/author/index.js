import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default function Path({item}) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => console.log(`${item.name} clicked!!!`)}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    marginTop: 5,
    color: '#fff',
    fontSize: 15,
  },
});
