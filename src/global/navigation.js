import React from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {PROFILE} from 'global/constants';

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
  },
  threeDot: {
    marginHorizontal: 15,
  },
});

export const screenOptionHeader = ({navigation}) => ({
  headerTintColor: '#fff',
  headerStyle: {backgroundColor: '#0D0F12'},
  headerTitleStyle: {
    color: '#fff',
  },
});

export const optionHeaderRight = ({navigation}) => ({
  headerRight: () => (
    <View style={styles.headerRight}>
      <TouchableOpacity onPress={() => navigation.navigate(PROFILE)}>
        <IconFontAwesome name="user-circle" color="#fff" size={20} />
      </TouchableOpacity>
      <IconEntypo
        style={styles.threeDot}
        name="dots-three-vertical"
        color="#fff"
        size={20}
      />
    </View>
  ),
});
