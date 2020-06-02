import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {BROWSE, SEARCH} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import IconFontisto from 'react-native-vector-icons/Fontisto';

export default function Home({navigation}) {
  const {colors} = useContext(ThemeContext);

  const handleBrowse = () => navigation.navigate(BROWSE);

  const handleSearch = () => navigation.navigate(SEARCH);

  return (
    <View style={styles.container}>
      <Text
        style={StyleSheet.compose(
          styles.title,
          colors.text,
        )}>
        Let's get you started
      </Text>

      <TouchableOpacity onPress={handleBrowse}>
        <IconFontisto
          name="nav-icon-grid"
          style={StyleSheet.compose(
            styles.icon,
            colors.text,
          )}
        />
      </TouchableOpacity>
      <Text
        style={StyleSheet.compose(
          styles.text,
          colors.text,
        )}>
        Browse new & popular courses
      </Text>
      <TouchableOpacity onPress={handleSearch}>
        <IconFontisto
          name="search"
          style={StyleSheet.compose(
            styles.icon,
            colors.text,
          )}
        />
      </TouchableOpacity>
      <Text
        style={StyleSheet.compose(
          styles.text,
          colors.text,
        )}>
        Search the library
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 30},
  icon: {marginTop: 40, marginBottom: 20, fontSize: 25},
  text: {fontSize: 20},
});
