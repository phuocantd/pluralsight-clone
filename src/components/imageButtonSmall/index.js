import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function ImageButton({url, title}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log(`${title} clicked!!!`)}>
      <ImageBackground source={{uri: url}} style={styles.imgBackground}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 10,
  },
  imgBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 150,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
