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
import {ThemeContext} from 'tools/context/theme';
import {Stores} from 'tools/context/stores';

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
  },
  threeDot: {
    marginHorizontal: 15,
  },
});

export const ScreenOptionHeader = () => {
  const {} = useContext(ThemeContext);

  return {
    headerTintColor: '#fff',
    headerStyle: {backgroundColor: '#0D0F12'},
    headerTitleStyle: {
      color: '#fff',
    },
  };
};

export const OptionHeaderRight = ({navigation}) => {
  const {state} = useContext(AuthContext);
  const {changeMode, colors} = useContext(ThemeContext);
  const {profile} = useContext(Stores);

  return {
    headerRight: () => (
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={changeMode}>
          <IconFontAwesome
            style={StyleSheet.compose(
              {marginRight: 20},
              colors.icon,
            )}
            name="lightbulb-o"
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(PROFILE)}>
          {state.isAuth ? (
            <Image
              source={{uri: profile.avatar}}
              style={{width: 25, height: 25, borderRadius: 12.5}}
            />
          ) : (
            <IconFontAwesome name="user-circle" style={colors.icon} size={20} />
          )}
        </TouchableOpacity>
        <Menu
          style={styles.threeDot}
          onSelect={value => navigation.navigate(value)}>
          <MenuTrigger>
            <IconEntypo
              name="dots-three-vertical"
              style={colors.icon}
              size={20}
            />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionText: StyleSheet.compose(
                {fontSize: 20, margin: 10},
                colors.text,
              ),
              optionsContainer: StyleSheet.compose(
                {
                  width: 220,
                },
                colors.background1,
              ),
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
