import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as Progress from 'react-native-progress';

import {AuthContext} from 'tools/context/auth';
import {Stores} from 'tools/context/stores';
import {HOME} from 'global/constants';
import {me} from 'api/user';

export default function Splash({navigation}) {
  const {state, authContext} = useContext(AuthContext);
  const {restoreProfile} = useContext(Stores);

  useEffect(() => {
    const _bootstrapAsync = async () => {
      let userToken = null;

      try {
        userToken = (await AsyncStorage.getItem('token')) || null;
        if (userToken) {
          const res = await me(userToken);
          restoreProfile(res.data.payload);
          authContext.restoreToken(userToken, true);
        } else {
          throw 'Token is uncorrect';
        }
      } catch (e) {
        AsyncStorage.removeItem('token');
        authContext.restoreToken(null, false);
        console.log('ERR:', e);
      }
    };

    if (state.isLoading) {
      _bootstrapAsync();
    } else {
      navigation.replace(HOME);
    }
  }, [authContext, navigation, restoreProfile, state]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading data ...</Text>
      <Progress.Bar progress={0.3} width={200} indeterminate={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {color: '#0076ff', fontSize: 20, marginBottom: 10},
});
