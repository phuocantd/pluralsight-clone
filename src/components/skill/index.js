import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {ThemeContext} from 'tools/context/theme';

export default function Skill({item}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={StyleSheet.compose(
        styles.item,
        colors.background3,
      )}
      onPress={() => console.log(`${item.name} clicked!!!`)}>
      <Text
        style={StyleSheet.compose(
          styles.name,
          colors.text,
        )}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  name: {
    marginHorizontal: 5,
    fontSize: 15,
  },
});
