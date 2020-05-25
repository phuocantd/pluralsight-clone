import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import InfoCourse from './info';

export default function Course({item, handleDetail}) {
  return (
    <TouchableOpacity style={styles.item} onPress={handleDetail}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.info}>
        <InfoCourse
          title={item.courseTitle}
          author={item.author}
          duration={item.duration}
          level={item.level}
          updated={item.updated}
          rating={item.rating}
        />
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
