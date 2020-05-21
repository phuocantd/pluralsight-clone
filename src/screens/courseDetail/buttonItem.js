import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ButtonItem() {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <IconFoundation name="target" size={25} color="#fff" />
        <Text style={styles.btnText}>Take a learning check</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <IconMaterialCommunityIcons
          name="folder-multiple"
          size={25}
          color="#fff"
        />
        <Text style={styles.btnText}>View related path & courses</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'rgba(138,153,168, 0.40)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 15,
  },
  btnText: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 10,
    paddingVertical: 10,
  },
});
