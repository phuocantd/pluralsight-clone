import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ThemeContext} from 'tools/context/theme';

export default function ButtonItem() {
  const {colors} = React.useContext(ThemeContext);
  return (
    <View>
      <TouchableOpacity
        style={StyleSheet.compose(
          styles.btn,
          colors.bgInput,
        )}>
        <IconFoundation name="target" size={25} style={colors.text} />
        <Text
          style={StyleSheet.compose(
            styles.btnText,
            colors.text,
          )}>
          Take a learning check
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={StyleSheet.compose(
          styles.btn,
          colors.bgInput,
        )}>
        <IconMaterialCommunityIcons
          name="folder-multiple"
          size={25}
          style={colors.text}
        />
        <Text
          style={StyleSheet.compose(
            styles.btnText,
            colors.text,
          )}>
          View related path & courses
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 15,
  },
  btnText: {fontSize: 15, marginLeft: 10, paddingVertical: 10},
});
