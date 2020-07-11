import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import {Stores} from 'src/tools/context/stores';

export default function AuthSetting({
  handleSignout,
  isDarkMode,
  changeMode,
  colors,
}) {
  const {profile} = useContext(Stores);

  const composeText = style =>
    StyleSheet.compose(
      style,
      colors.text,
    );
  const composeseparator = StyleSheet.compose(
    styles.separator,
    colors.separator,
  );
  return (
    <ScrollView style={styles.content}>
      <View style={styles.info}>
        <Image source={{uri: profile.avatar}} style={styles.imgPostrait} />
        <View>
          <Text style={composeText(styles.name)}>{profile.name}</Text>
          <Text style={composeText(styles.username)}>{profile.email}</Text>
        </View>
      </View>
      <Text style={composeText(styles.label)}>Account</Text>
      <Text style={composeText(styles.label)}>Subscription</Text>
      <Text style={composeText(styles.label)}>Communication Preferences</Text>

      <View style={composeseparator} />

      <Text style={composeText(styles.label)}>Captions</Text>
      <Text style={composeText(styles.label)}>Notifications</Text>
      <Text style={composeText(styles.label)}>Advanced Options</Text>
      <View style={styles.mode}>
        <Text style={composeText(styles.label)}>Dark mode</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={changeMode}
          value={isDarkMode}
        />
      </View>

      <View style={composeseparator} />

      <Text style={composeText(styles.label)}>App version</Text>
      <Text style={composeText(styles.ver)}>1.0.1</Text>

      <View style={composeseparator} />

      <TouchableOpacity
        style={StyleSheet.compose(
          styles.btn,
          colors.btn,
        )}
        onPress={handleSignout}>
        <Text
          style={StyleSheet.compose(
            styles.textBtn,
            colors.textBtn,
          )}>
          Sign out
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgPostrait: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    marginLeft: 20,
  },
  username: {
    fontSize: 15,
    marginLeft: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  separator: {
    height: 1,
    marginTop: 20,
    marginBottom: 10,
  },
  ver: {
    fontSize: 13,
  },
  btn: {
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  textBtn: {
    textTransform: 'uppercase',
    marginVertical: 8,
    fontSize: 15,
  },
  mode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
