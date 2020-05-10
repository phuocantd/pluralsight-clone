import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {LOGIN} from 'global/constants';
import {globalStyles} from 'global/styles';

export default function Profile({navigation}) {
  return (
    <View style={globalStyles.container}>
      <View style={styles.center}>
        <Text style={styles.title}>Please sign in to view your profile</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate(LOGIN)}>
          <Text style={styles.textBtn}>Sign in</Text>
        </TouchableOpacity>
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
  },
  btn: {
    backgroundColor: '#2968B2',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  textBtn: {
    color: '#fff',
    fontSize: 17,
    textTransform: 'uppercase',
  },
});
