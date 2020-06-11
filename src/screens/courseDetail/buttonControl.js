import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

import {ThemeContext} from 'tools/context/theme';

export default function ButtonControl() {
  const {colors} = React.useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View
          style={StyleSheet.compose(
            styles.circleIcon,
            colors.bgInput,
          )}>
          <IconEntypo name="bookmark" size={20} style={colors.text} />
        </View>
        <Text
          style={StyleSheet.compose(
            styles.txtButton,
            colors.text,
          )}>
          Bookmark
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View
          style={StyleSheet.compose(
            styles.circleIcon,
            colors.bgInput,
          )}>
          <IconEntypo name="add-to-list" size={20} style={colors.text} />
        </View>
        <Text
          style={StyleSheet.compose(
            styles.txtButton,
            colors.text,
          )}>
          Add to Channel
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View
          style={StyleSheet.compose(
            styles.circleIcon,
            colors.bgInput,
          )}>
          <IconEntypo
            name="arrow-with-circle-down"
            size={20}
            style={colors.text}
          />
        </View>
        <Text
          style={StyleSheet.compose(
            styles.txtButton,
            colors.text,
          )}>
          Download
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-around'},
  button: {alignItems: 'center'},
  circleIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(138,153,168, 0.40)',
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
  },
  txtButton: {fontSize: 15},
});
