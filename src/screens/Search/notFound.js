import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function NotFound({name}) {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="search" size={120} color="#fff" />
      <Text style={styles.title}>Sorry, we couldn't find any matches for</Text>
      <Text style={styles.title}>"{name}"</Text>
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
    color: '#fff',
    fontSize: 18,
  },
});
