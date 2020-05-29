import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {ThemeContext} from 'tools/context/theme';

export default function NotFound({name}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Icon
        style={StyleSheet.compose(
          styles.icon,
          colors.icon,
        )}
        name="search"
        size={120}
      />
      <Text
        style={StyleSheet.compose(
          styles.title,
          colors.text,
        )}>
        Sorry, we couldn't find any matches for
      </Text>
      <Text
        style={StyleSheet.compose(
          styles.title,
          colors.text,
        )}>
        "{name}"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {marginTop: 100},
  title: {
    alignContent: 'center',
    fontSize: 18,
  },
});
