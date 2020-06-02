import {StyleSheet} from 'react-native';

export const dark = StyleSheet.create({
  container: {backgroundColor: '#000'},
  bgBtn: {backgroundColor: '#0084BD'},
  separator: {backgroundColor: '#fff'},
  bgInput: {backgroundColor: 'rgba(138,153,168, 0.40)'},
  background1: {backgroundColor: '#0D0F12'},
  background2: {backgroundColor: '#181C20'},
  background3: {backgroundColor: '#1E2429'},
  text: {color: '#fff'},
  btn: {borderColor: '#2EA0D6'},
  bgTextBtn: {color: '#fff'},
  textBtn: {color: '#2EA0D6'},
  placeHolder: {color: '#eee'},
  icon: {color: '#ccc'},
  borBt: {borderBottomColor: '#fff'},
});

export const light = StyleSheet.create({
  container: {backgroundColor: '#F2F2F2'},
  bgBtn: {backgroundColor: '#0084BD'},
  separator: {backgroundColor: '#000'},
  bgInput: {backgroundColor: 'rgba(138,153,168, 0.30)'},
  background1: {backgroundColor: '#F0F3F5'},
  background2: {backgroundColor: '#F7F9FA'},
  background3: {backgroundColor: '#FFFFFF'},
  text: {color: '#000'},
  bgTextBtn: {color: '#fff'},
  btn: {borderColor: '#0074AB'},
  textBtn: {color: '#0074AB'},
  placeHolder: {color: '#555'},
  icon: {color: '#333'},
  borBt: {borderBottomColor: '#000'},
});

const themes = {
  dark,
  light,
};

export default themes;
