import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function AuthSetting({handleSignout}) {
  return (
    <View style={styles.content}>
      <View style={styles.info}>
        <Image
          source={{
            uri:
              'https://pluralsight.imgix.net/author/lg/2262d7bd-d718-41c7-833c-03e8cd4566b9.jpg',
          }}
          style={styles.imgPostrait}
        />
        <View>
          <Text style={styles.name}>Hà Công Tín</Text>
          <Text style={styles.username}>congtinh</Text>
        </View>
      </View>
      <Text style={styles.label}>Account</Text>
      <Text style={styles.label}>Subscription</Text>
      <Text style={styles.label}>Communication Preferences</Text>
      <View style={styles.seperator} />
      <Text style={styles.label}>Captions</Text>
      <Text style={styles.label}>Notifications</Text>
      <Text style={styles.label}>Advanced Options</Text>
      <View style={styles.seperator} />

      <Text style={styles.label}>App version</Text>
      <Text style={styles.ver}>1.0.1</Text>
      <View style={styles.seperator} />

      <TouchableOpacity style={styles.btn} onPress={handleSignout}>
        <Text style={styles.textBtn}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgPostrait: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 20,
  },
  username: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 20,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  seperator: {
    backgroundColor: '#aaa',
    height: 0.5,
    marginTop: 20,
  },
  ver: {
    color: '#fff',
    fontSize: 13,
  },
  btn: {
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2968B2',
    borderRadius: 5,
  },
  textBtn: {
    color: '#2968B2',
    textTransform: 'uppercase',
    marginVertical: 8,
    fontSize: 15,
  },
});
