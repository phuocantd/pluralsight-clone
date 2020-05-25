import React from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ButtonControl({image}) {
  return (
    <ImageBackground style={styles.image} source={{uri: image}}>
      <TouchableOpacity
        style={styles.circleIcon}
        onPress={() => console.log('Play')}>
        <Icon name="play" size={50} color="#fff" />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
