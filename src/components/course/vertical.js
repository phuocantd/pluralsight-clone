import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

import {COURSEDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import InfoCourse from './info';

export default function Course({item, handleDetail}) {
  const {colors} = React.useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={StyleSheet.compose(
        styles.item,
        colors.background3,
      )}
      onPress={() => handleDetail(COURSEDETAIL)}>
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
    margin: 5,
    borderWidth: 1,
    borderColor: '#1E2429',
  },
  image: {
    alignSelf: 'center',
    width: 198,
    height: 100,
  },
});
