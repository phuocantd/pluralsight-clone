import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function ImageButton({url, title, handleDetail, style}) {
  return (
    <TouchableOpacity style={style} onPress={handleDetail}>
      <ImageBackground source={{uri: url}} style={styles.imgBackground}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
