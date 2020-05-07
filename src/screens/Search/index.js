import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from 'styles/global';

export default function Search() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.txt}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: '#fff',
  },
});
