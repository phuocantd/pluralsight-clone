import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';

export default function NoAuthSetting({
  handleSignin,
  isDarkMode,
  changeMode,
  colors,
}) {
  const composeText = StyleSheet.compose(
    styles.text,
    colors.text,
  );

  return (
    <View style={styles.content}>
      <Text style={composeText}>Captions</Text>
      <Text style={composeText}>Notifications</Text>
      <Text style={composeText}>App version</Text>
      <Text
        style={StyleSheet.compose(
          styles.version,
          colors.text,
        )}>
        2.32.1
      </Text>
      <View style={styles.mode}>
        <Text style={composeText}>Dark mode</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={changeMode}
          value={isDarkMode}
        />
      </View>
      <View
        style={StyleSheet.compose(
          styles.seperator,
          colors.seperator,
        )}
      />

      <TouchableOpacity
        style={StyleSheet.compose(
          styles.btn,
          colors.btn,
        )}
        onPress={handleSignin}>
        <Text
          style={StyleSheet.compose(
            styles.btnText,
            colors.textBtn,
          )}>
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  version: {
    fontSize: 15,
  },
  seperator: {height: 0.8, marginVertical: 15},
  btn: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 3,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    textTransform: 'uppercase',
    padding: 5,
  },
  mode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
