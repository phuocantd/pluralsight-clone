import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from 'styles/global';

export default function Downloads() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.txt}>Downloads</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: '#fff',
  },
});
