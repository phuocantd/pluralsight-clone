import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import {AuthContext} from 'src/tools/context/auth';
import {ThemeContext} from 'src/tools/context/theme';
import {Stores} from 'src/tools/context/stores';
import {globalStyles} from 'src/global/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {updateProfileAPI, me} from 'api/user';
import Axios from 'axios';

export default function UpdateProfile() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [phone, setPhone] = useState('');

  const {colors} = useContext(ThemeContext);
  const {updateProfile} = useContext(Stores);
  const {state} = useContext(AuthContext);

  const handleUpdateProfile = async () => {
    try {
      const res = await updateProfileAPI(state.token, name, avatar, phone);
      if (res.data.message === 'OK') {
        updateProfile(name, avatar, phone);
      }
    } catch (err) {
      console.log('ERR:', JSON.stringify(err));
    }
  };

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <ScrollView>
        <View style={styles.center}>
          <Text
            style={StyleSheet.compose(
              styles.label,
              colors.text,
            )}>
            Name
          </Text>
          <TextInput
            style={StyleSheet.flatten([
              styles.input,
              colors.bgInput,
              colors.text,
            ])}
            value={name}
            onChangeText={text => setName(text)}
          />
          <Text
            style={StyleSheet.compose(
              styles.label,
              colors.text,
            )}>
            Avatar
          </Text>
          <TextInput
            style={StyleSheet.flatten([
              styles.input,
              colors.bgInput,
              colors.text,
            ])}
            value={avatar}
            onChangeText={text => setAvatar(text)}
          />
          <Text
            style={StyleSheet.compose(
              styles.label,
              colors.text,
            )}>
            Phone
          </Text>
          <TextInput
            style={StyleSheet.flatten([
              styles.input,
              colors.bgInput,
              colors.text,
            ])}
            value={phone}
            onChangeText={text => setPhone(text)}
          />

          <View style={styles.mt}>
            <TouchableOpacity
              style={[styles.btn, colors.btn]}
              onPress={handleUpdateProfile}>
              <Text
                style={StyleSheet.compose(
                  styles.labelText,
                  colors.textBtn,
                )}>
                update profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
    marginTop: 30,
  },
  label: {marginTop: 10, marginBottom: 5},
  input: {
    borderRadius: 6,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  mt: {marginTop: 15},
  border: {borderRadius: 6, borderWidth: 1, marginTop: 15},
  btn: {
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  labelText: {textTransform: 'uppercase', marginVertical: 10, fontSize: 15},
});
