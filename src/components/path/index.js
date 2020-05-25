import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {PATHDETAIL} from 'global/constants';

export default function Path({item, handleDetail}) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleDetail(PATHDETAIL, 'Angular denver 2019')}>
      <View style={styles.center}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.info}>{item.count} courses</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 200,
    backgroundColor: '#1E2429',
    margin: 5,
  },
  center: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    marginTop: 5,
    marginHorizontal: 5,
    color: '#fff',
    fontSize: 15,
  },
  info: {
    marginHorizontal: 5,
    color: '#fff',
    fontSize: 12,
  },
});
