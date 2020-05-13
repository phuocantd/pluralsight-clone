import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import InfoCourse from './info';

export default function Course({item}) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => console.log(`${item.courseTitle} clicked!!!`)}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <InfoCourse
        title={item.courseTitle}
        author={item.author}
        duration={item.duration}
        level={item.level}
        updated={item.updated}
        rating={item.rating}
      />
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
  image: {
    width: 200,
    height: 100,
  },
});
