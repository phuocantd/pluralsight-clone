import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default function ButtonControl() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.circleIcon}>
          <IconEntypo name="bookmark" size={20} color="#fff" />
        </View>
        <Text style={styles.txtButton}>Bookmark</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.circleIcon}>
          <IconEntypo name="add-to-list" size={20} color="#fff" />
        </View>
        <Text style={styles.txtButton}>Add to Channel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.circleIcon}>
          <IconEntypo name="arrow-with-circle-down" size={20} color="#fff" />
        </View>
        <Text style={styles.txtButton}>Download</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
  },
  circleIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(138,153,168, 0.40)',
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
  },
  txtButton: {
    color: '#fff',
    fontSize: 15,
  },
});
