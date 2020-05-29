import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {ThemeContext} from 'tools/context/theme';

export default function Path({item, handleDetail}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <TouchableOpacity style={styles.item} onPress={handleDetail}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.info}>
        <Text
          style={StyleSheet.compose(
            styles.name,
            colors.text,
          )}>
          {item.name}
        </Text>
        <Text
          style={StyleSheet.compose(
            styles.count,
            colors.text,
          )}>
          {item.count} Courses
        </Text>
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
  info: {marginLeft: 20},
  name: {marginTop: 5, fontSize: 18},
  count: {fontSize: 13},
});
