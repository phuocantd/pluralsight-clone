import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {LOGIN} from 'global/constants';

export default function Setting({navigation}) {
  return (
    <View style={globalStyles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Captions</Text>
        <Text style={styles.text}>Notifications</Text>
        <Text style={styles.text}>App version</Text>
        <Text style={styles.version}>2.32.1</Text>
        <View style={styles.seperator} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate(LOGIN)}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },
  version: {
    color: '#Fff',
    fontSize: 15,
  },
  seperator: {height: 0.5, backgroundColor: '#aaa', marginVertical: 15},
  btn: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#0084BD',
    alignItems: 'center',
  },
  btnText: {
    color: '#0084BD',
    fontSize: 20,
    textTransform: 'uppercase',
    padding: 5,
  },
});
