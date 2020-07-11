import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {AuthContext} from 'tools/context/auth';
import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
// import {Stores} from 'tools/context/stores';
import AuthHome from './auth';
import NoAuthHome from './noAuth';

export default function Home({navigation}) {
  const {state} = useContext(AuthContext);
  const {colors} = useContext(ThemeContext);
  // const {profile} = useContext(Stores);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      {state.isAuth ? (
        <AuthHome navigation={navigation} />
      ) : (
        <NoAuthHome navigation={navigation} />
      )}
    </View>
  );
}
