import {StyleSheet} from 'react-native';

export const dark = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
});

export const light = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

const themes = {
  dark,
  light,
};

export default themes;
