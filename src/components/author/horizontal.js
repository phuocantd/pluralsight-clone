import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default function Path({item, handleDetail}) {
  return (
    <TouchableOpacity style={styles.item} onPress={handleDetail}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.count}>{item.count} Courses</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginLeft: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 20,
  },
  name: {
    marginTop: 5,
    color: '#fff',
    fontSize: 18,
  },
  count: {
    color: '#fff',
    fontSize: 13,
  },
});
