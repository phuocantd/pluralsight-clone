/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import _ from 'lodash';

import {globalStyles} from 'global/styles';
import {AuthContext} from 'tools/context/auth';
import {ThemeContext} from 'tools/context/theme';
import PasswordInput from 'components/passwordInput';
import {register} from 'api/user';

export default function Login({navigation}) {
  const {colors} = useContext(ThemeContext);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {state} = useContext(AuthContext);

  React.useEffect(() => {
    if (state.isAuth) {
      navigation.goBack();
    }
  }, [state, navigation]);

  const validationEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validationPhone = () => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phone);
  };

  const validate = () => {
    if (
      userName === '' ||
      email === '' ||
      phone === '' ||
      password === '' ||
      confirmPassword === '' ||
      !validationPhone() ||
      !validationEmail() ||
      password !== confirmPassword
    ) {
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    // authContext.signUp('phuocantd-register');
    try {
      if (!validate()) {
        throw 'Thông tin đăng kí không hợp lệ';
      }

      const res = await register(userName, email, phone, password);
      if (_.get(res, 'data.message', '') === 'OK') {
        alert('Bạn vui lòng vào mail để kích hoạt tài khoản');
      } else {
        throw 'FAIL';
      }
    } catch (error) {
      console.log('ERR:', error);
      alert(
        `${error ||
          _.get(error, 'response.data.message', 'Đăng kí thất bại!!!')}`,
      );
    }
  };

  const composeLabel = StyleSheet.compose(
    styles.label,
    colors.text,
  );

  const composeInput = StyleSheet.flatten([
    styles.input,
    colors.bgInput,
    colors.text,
  ]);

  return (
    <ScrollView
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <View style={styles.center}>
        <Text style={composeLabel}>Username</Text>
        <TextInput
          style={composeInput}
          value={userName}
          onChangeText={text => setUserName(text)}
        />
        <Text style={composeLabel}>Email</Text>
        <TextInput
          style={composeInput}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {email !== '' && !validationEmail() && (
          <Text style={{color: '#f00', fontSize: 14}}>Email không hợp lệ</Text>
        )}
        <Text style={composeLabel}>Phone</Text>
        <TextInput
          keyboardType="numeric"
          style={composeInput}
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        {phone !== '' && !validationPhone() && (
          <Text style={{color: '#f00', fontSize: 14}}>
            Số điện thoại không hợp lệ
          </Text>
        )}
        <Text style={composeLabel}>Password</Text>
        <PasswordInput value={password} onChange={setPassword} />
        <Text style={composeLabel}>Confirm password</Text>
        <PasswordInput value={confirmPassword} onChange={setConfirmPassword} />
        {password !== confirmPassword && (
          <Text style={{color: '#f00', fontSize: 14}}>
            Password is not match
          </Text>
        )}
        <TouchableOpacity
          style={StyleSheet.compose(
            styles.btn,
            colors.bgBtn,
          )}
          onPress={handleSignup}>
          <Text
            style={StyleSheet.compose(
              styles.btnText,
              colors.bgTextBtn,
            )}>
            sign up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
    marginTop: 10,
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
  btn: {marginTop: 15, alignItems: 'center', borderRadius: 6},
  btnText: {textTransform: 'uppercase', marginVertical: 10, fontSize: 15},
  border: {borderRadius: 6, borderWidth: 1, marginTop: 15},
  mt: {marginTop: 15},
  btnLabel: {alignItems: 'center'},
  labelText: {textTransform: 'uppercase', marginVertical: 10, fontSize: 15},
});
