import React from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import {PROFILE, SETTINGS, CONTACT, FEEDBACK} from './constants';

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
});
