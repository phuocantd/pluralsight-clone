import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {ThemeContext} from 'tools/context/theme';

export default function Description({description}) {
  const {colors} = React.useContext(ThemeContext);

  const [isExpand, setIsExpand] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={StyleSheet.compose(
          styles.text,
          colors.text,
        )}>
        {isExpand ? description : description.substring(0, 150)}
      </Text>
      <TouchableOpacity
        style={StyleSheet.compose(
          styles.btn,
          colors.bgInput,
        )}
        onPress={() => setIsExpand(!isExpand)}>
        <Icon name={isExpand ? 'up' : 'down'} size={20} style={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  text: {fontSize: 14, flex: 1},
  btn: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 5,
  },
});
