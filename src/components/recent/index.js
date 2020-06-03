import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

import {ThemeContext} from 'tools/context/theme';

export default function Recent({list, setList, handleSelectRecent}) {
  const {colors} = React.useContext(ThemeContext);

  const composeText = style =>
    StyleSheet.compose(
      style,
      colors.text,
    );
  return (
    <View>
      <View style={styles.header}>
        <Text style={composeText(styles.recentText)}>Recent searches</Text>
        <TouchableOpacity onPress={() => setList([])}>
          <Text
            style={StyleSheet.compose(
              styles.clear,
              colors.textBtn,
            )}>
            CLEAR ALL
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.listRecent}
        keyExtractor={item => item.id}
        data={list}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemRecent}
            onPress={() => handleSelectRecent(item.text)}>
            <IconEntypo
              style={StyleSheet.compose(
                styles.iconTime,
                colors.icon,
              )}
              name="back-in-time"
              color="#fff"
              size={16}
            />
            <Text style={composeText(styles.textRecent)}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listRecent: {marginTop: 10},
  recentText: {fontSize: 18},
  clear: {fontSize: 18},
  itemRecent: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  iconTime: {marginTop: 3},
  textRecent: {marginLeft: 10, fontSize: 16},
});
