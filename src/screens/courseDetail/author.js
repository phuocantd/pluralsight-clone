import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Author({name, image}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(138,153,168, 0.40)',
    borderRadius: 10,
    paddingRight: 5,
    marginRight: 5,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  name: {
    marginLeft: 5,
    color: '#fff',
  },
});
