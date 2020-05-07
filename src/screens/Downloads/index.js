import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {globalStyles} from 'styles/global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Downloads() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.center}>
        <Icon name="arrow-down-circle-outline" size={120} color="#1E2429" />
        <Text style={styles.title}>No downloads</Text>
        <Text style={styles.detail}>
          Courses you download will appear here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 25,
  },
  detail: {
    color: '#fff',
    fontSize: 20,
  },
});