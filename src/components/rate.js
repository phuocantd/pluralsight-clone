import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ThemeContext} from 'tools/context/theme';

export default function Rate({rate}) {
  const {colors} = React.useContext(ThemeContext);

  return (
    <View style={styles.rate}>
      <View style={styles.star}>
        {Array(rate)
          .fill(null)
          .map((item, idx) => (
            <Icon key={idx} name="star" color="#FAD000" size={13} />
          ))}
        {Array(5 - rate)
          .fill(null)
          .map((item, idx) => (
            <Icon key={idx} name="star-o" color="#FAD000" size={13} />
          ))}
      </View>
      <Text
        style={StyleSheet.compose(
          styles.info,
          colors.text,
        )}>
        ({rate})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rate: {flexDirection: 'row'},
  star: {flexDirection: 'row', marginTop: 3},
});
