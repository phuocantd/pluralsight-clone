import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from 'tools/context/theme';

export default function Period({item}) {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={styles.item}>
      <IconFontAwesome5
        color="#0f0"
        name={item.isView ? 'check-circle' : 'circle'}
        size={15}
      />
      <Text
        style={StyleSheet.compose(
          styles.name,
          colors.text,
        )}>
        {item.name}
      </Text>
      <Text style={colors.text}>{item.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {flex: 1, marginLeft: 10},
});
