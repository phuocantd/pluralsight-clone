/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {LOGIN} from 'global/constants';
import {globalStyles} from 'global/styles';

export default function Profile({navigation}) {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <View style={globalStyles.container}>
      {isAuth ? (
        <View style={styles.content}>
          <View style={styles.info}>
            <Image
              source={{
                uri:
                  'https://pluralsight.imgix.net/author/lg/2262d7bd-d718-41c7-833c-03e8cd4566b9.jpg',
              }}
              style={styles.imgPostrait}
            />
            <Text style={styles.name}>Hà Công Tín</Text>
          </View>
          <Text
            style={{
              marginTop: 40,
              color: '#fff',
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            Activity insights (last 30 day)
          </Text>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <View style={{justifyContent: 'space-between'}}>
              <Text style={{color: '#fff', fontSize: 13}}>TOTAL</Text>
              <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>
                5
              </Text>
            </View>
            <View style={{marginLeft: 10, justifyContent: 'space-between'}}>
              <Text style={{color: '#fff', fontSize: 13}}>ACTIVE DAYS</Text>
              <Text style={{color: '#fff', fontSize: 13}}>2 day streak</Text>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{color: '#fff', fontSize: 13}}>
              MOST ACTIVE TIME OF DAY
            </Text>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              11:00 AM
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{color: '#fff', fontSize: 13}}>
              MOST VIEWED SUBJECT
            </Text>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              It Ops
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.center}>
          <Text style={styles.title}>Please sign in to view your profile</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate(LOGIN)}>
            <Text style={styles.textBtn}>Sign in</Text>
          </TouchableOpacity>
        </View>
      )}
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
  content: {
    marginHorizontal: 20,
    marginTop: 20,
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
});
