import {StyleSheet} from 'react-native';

export const dark = StyleSheet.create({
  container: {backgroundColor: '#000'},
  text: {color: '#fff'},
  bgBtn: {backgroundColor: '#0084BD'},
  bgTextBtn: {color: '#fff'},
  btn: {borderColor: '#2EA0D6'},
  textBtn: {color: '#2EA0D6'},
  seperator: {backgroundColor: '#fff'},
  bgInput: {backgroundColor: 'rgba(138,153,168, 0.40)'},
  placeHolder: {color: '#eee'},
  background1: {backgroundColor: '#0D0F12'},
  background2: {backgroundColor: '#181C20'},
  background3: {backgroundColor: '#1E2429'},
  icon: {color: '#cccc'},
});

export const light = StyleSheet.create({
  container: {backgroundColor: '#F2F2F2'},
  text: {color: '#000'},
  bgBtn: {backgroundColor: '#0084BD'},
  bgTextBtn: {color: '#fff'},
  btn: {borderColor: '#0074AB'},
  textBtn: {color: '#0074AB'},
  seperator: {backgroundColor: '#000'},
  bgInput: {backgroundColor: 'rgba(138,153,168, 0.30)'},
  placeHolder: {color: '#555'},
  background1: {backgroundColor: '#F0F3F5'},
  background2: {backgroundColor: '#F7F9FA'},
  background3: {backgroundColor: '#FFFFFF'},
  icon: {color: '#333'},
});

const themes = {
  dark,
  light,
};

export default themes;
