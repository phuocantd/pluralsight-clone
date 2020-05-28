import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {LOGIN} from 'global/constants';
import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import {AuthContext} from 'tools/context/auth';
import AuthProfile from './auth';
import NoAuthProfile from './noAuth';

export default function Profile({navigation}) {
  const {colors} = React.useContext(ThemeContext);
  const {state} = useContext(AuthContext);

  const handleSignin = () => navigation.navigate(LOGIN);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      {state.isAuth ? (
        <AuthProfile />
      ) : (
        <NoAuthProfile handleSignIn={handleSignin} />
      )}
    </View>
  );
}
