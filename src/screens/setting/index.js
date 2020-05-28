import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {LOGIN} from 'global/constants';
import {AuthContext} from 'tools/context/auth';
import {ThemeContext} from 'tools/context/theme';
import AuthSetting from './auth';
import NoAuthSetting from './noAuth';

export default function Setting({navigation}) {
  const {state, authContext} = useContext(AuthContext);
  const {mode, colors, changeMode} = React.useContext(ThemeContext);

  const handleSignout = () => {
    authContext.signOut();
  };

  const handleSignin = () => navigation.navigate(LOGIN);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      {state.isAuth ? (
        <AuthSetting
          handleSignout={handleSignout}
          isDarkMode={mode === 'dark'}
          changeMode={changeMode}
          colors={colors}
        />
      ) : (
        <NoAuthSetting
          handleSignin={handleSignin}
          isDarkMode={mode === 'dark'}
          changeMode={changeMode}
          colors={colors}
        />
      )}
    </View>
  );
}
