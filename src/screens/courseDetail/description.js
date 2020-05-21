import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ButtonControl({desciption}) {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isExpand ? desciption : desciption.substring(0, 117)}
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setIsExpand(!isExpand)}>
        <Icon name={isExpand ? 'up' : 'down'} size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  btn: {
    backgroundColor: 'rgba(138,153,168, 0.40)',
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 5,
  },
});
