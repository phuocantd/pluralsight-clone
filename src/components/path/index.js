import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {PATHDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';

export default function Path({item, handleDetail}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={StyleSheet.compose(
        styles.item,
        colors.background3,
      )}
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
        <Text
          style={StyleSheet.compose(
            styles.title,
            colors.text,
          )}>
          {item.title}
        </Text>
        <Text
          style={StyleSheet.compose(
            styles.info,
            colors.text,
          )}>
          {item.count} courses
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {width: 200, height: 200, margin: 5},
  center: {alignItems: 'center'},
  image: {width: 100, height: 100},
  title: {marginTop: 5, marginHorizontal: 5, fontSize: 15},
  info: {marginHorizontal: 5, fontSize: 12},
});
