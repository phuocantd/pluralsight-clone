import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ThemeContext} from 'tools/context/theme';
import {RATING, LISTRATE} from 'src/global/constants';
import {AuthContext} from 'src/tools/context/auth';

export default function ButtonItem({id, navigation, ratings}) {
  const {colors} = useContext(ThemeContext);
  const {state} = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(LISTRATE, {ratings})}
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
          Xem đánh giá
        </Text>
      </TouchableOpacity>
      {state.isAuth && (
        <TouchableOpacity
          onPress={() => navigation.navigate(RATING, {id})}
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
            Đánh giá khóa học
          </Text>
        </TouchableOpacity>
      )}
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
