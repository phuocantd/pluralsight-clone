import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  // Linking,
} from 'react-native';

import {globalStyles} from 'global/styles';
import PasswordInput from 'components/passwordInput';

export default function Login({navigation}) {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <View style={styles.center}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={userName}
            onChangeText={text => setUserName(text)}
          />
          <Text style={styles.label}>First name</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          <Text style={styles.label}>Last name</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
          <Text style={styles.label}>Phone</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={phone}
            onChangeText={text => setUserName(setPhone)}
          />
          <Text style={styles.label}>Password</Text>
          <PasswordInput value={password} onChange={setPassword} />
          <Text style={styles.label}>Confirm password</Text>
          <PasswordInput
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>sign up</Text>
          </TouchableOpacity>
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
    marginTop: 10,
  },
  label: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#0D0F12',
    borderRadius: 6,
    color: '#fff',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  btn: {
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: '#2968B2',
    borderRadius: 6,
  },
  btnText: {
    textTransform: 'uppercase',
    marginVertical: 10,
    color: '#fff',
    fontSize: 15,
  },
  border: {
    borderRadius: 6,
    borderColor: '#2968B2',
    borderWidth: 1,
    marginTop: 15,
  },
  mt: {
    marginTop: 15,
  },
  btnLabel: {
    alignItems: 'center',
  },
  labelText: {
    color: '#2968B2',
    textTransform: 'uppercase',
    marginVertical: 10,
    fontSize: 15,
  },
});
