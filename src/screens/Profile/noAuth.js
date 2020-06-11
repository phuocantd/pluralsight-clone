import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function NoAuthProfile({handleSignIn, colors}) {
  return (
    <View style={styles.center}>
      <Text style={colors.text}>Please sign in to view your profile</Text>
      <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
        <Text style={styles.textBtn}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#0084BD',
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
