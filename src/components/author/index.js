import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {ThemeContext} from 'tools/context/theme';

export default function Path({item, handleDetail}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <TouchableOpacity style={styles.item} onPress={() => handleDetail(item.id)}>
      <Image
        style={styles.image}
        source={{
          uri: item['user.avatar'],
        }}
      />
      <Text
        style={StyleSheet.compose(
          styles.title,
          colors.text,
        )}>
        {item['user.name']}
      </Text>
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
    fontSize: 15,
  },
});
