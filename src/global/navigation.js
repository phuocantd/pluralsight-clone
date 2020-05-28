/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import {PROFILE, SETTINGS, CONTACT, FEEDBACK} from './constants';
import {AuthContext} from 'tools/context/auth';

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

export const OptionHeaderRight = ({navigation}) => {
  const {state} = useContext(AuthContext);

  return {
    headerRight: () => (
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={() => navigation.navigate(PROFILE)}>
          {state.isAuth ? (
            <Image
              source={{
                uri:
                  'https://pluralsight.imgix.net/author/lg/2262d7bd-d718-41c7-833c-03e8cd4566b9.jpg',
              }}
              style={{width: 25, height: 25, borderRadius: 12.5}}
            />
          ) : (
            <IconFontAwesome name="user-circle" color="#fff" size={20} />
          )}
        </TouchableOpacity>
        <Menu
          style={styles.threeDot}
          onSelect={value => navigation.navigate(value)}>
          <MenuTrigger>
            <IconEntypo name="dots-three-vertical" color="#fff" size={20} />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionText: {color: '#fff', fontSize: 20, margin: 10},
              optionsContainer: {
                backgroundColor: '#0D0F12',
                width: 220,
              },
            }}>
            <MenuOption value={SETTINGS} text="Settings" />
            <MenuOption value={FEEDBACK} text="Send feedback" />
            <MenuOption value={CONTACT} text="Contact support" />
          </MenuOptions>
        </Menu>
      </View>
    ),
  };
};
