import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {AuthContext} from 'tools/context/auth';
import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
// import {Stores} from 'tools/context/stores';
import Auth from './auth';
import NoAuth from './noAuth';

export default function CourseDetail({navigation, route}) {
  const {id} = route.params;
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
        <Auth navigation={navigation} id={id} />
      ) : (
        <NoAuth navigation={navigation} id={id} />
      )}
    </View>
  );
}
