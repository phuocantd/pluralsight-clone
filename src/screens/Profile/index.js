import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {LOGIN, UPDATEPROFILE} from 'global/constants';
import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import {AuthContext} from 'tools/context/auth';
import AuthProfile from './auth';
import NoAuthProfile from './noAuth';

export default function Profile({navigation}) {
  const {colors} = useContext(ThemeContext);
  const {state} = useContext(AuthContext);

  const handleSignin = () => navigation.navigate(LOGIN);

  const handleUpdateProfile = () => navigation.navigate(UPDATEPROFILE);

  const handleViewAvatar = (name, url) => {
    navigation.navigate('ImageView', {
      file: {fileName: name, uri: url},
    });
  };

  console.log('state', state);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      {state.isAuth ? (
        <AuthProfile
          colors={colors}
          handleUpdateProfile={handleUpdateProfile}
          handleViewAvatar={handleViewAvatar}
        />
      ) : (
        <NoAuthProfile handleSignIn={handleSignin} colors={colors} />
      )}
    </View>
  );
}
