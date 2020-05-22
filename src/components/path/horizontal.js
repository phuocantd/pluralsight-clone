import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import InforPath from './info';

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
        <InforPath title={item.title} count={item.count} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 70,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
});
