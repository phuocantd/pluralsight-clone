import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Downloads() {
  const {colors} = React.useContext(ThemeContext);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <View style={styles.center}>
        <Icon name="arrow-down-circle-outline" size={120} color="#1E2429" />
        <Text
          style={StyleSheet.compose(
            styles.title,
            colors.text,
          )}>
          No downloads
        </Text>
        <Text
          style={StyleSheet.compose(
            styles.detail,
            colors.text,
          )}>
          Courses you download will appear here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 25},
  detail: {fontSize: 20},
});
