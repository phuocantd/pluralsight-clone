import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {ThemeContext} from 'tools/context/theme';

export default function Author({name, image}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <View
      style={StyleSheet.compose(
        styles.container,
        colors.bgInput,
      )}>
      <Image style={styles.image} source={{uri: image}} />
      <Text
        style={StyleSheet.compose(
          styles.name,
          colors.text,
        )}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingRight: 5,
    marginRight: 5,
  },
  image: {width: 25, height: 25, borderRadius: 12.5},
  name: {marginLeft: 5},
});
