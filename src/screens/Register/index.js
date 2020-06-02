import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {globalStyles} from 'global/styles';
import {AuthContext} from 'tools/context/auth';
import {ThemeContext} from 'tools/context/theme';
import PasswordInput from 'components/passwordInput';

export default function Login({navigation}) {
  const {colors} = useContext(ThemeContext);

  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {state, authContext} = useContext(AuthContext);

  React.useEffect(() => {
    if (state.isAuth) {
      navigation.goBack();
    }
  }, [state, navigation]);

  const handleSignup = () => {
    authContext.signUp('phuocantd-register');
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
        <Text style={composeLabel}>Email</Text>
        <TextInput
          style={composeInput}
          value={userName}
          onChangeText={text => setUserName(text)}
        />
        <Text style={composeLabel}>First name</Text>
        <TextInput
          style={composeInput}
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <Text style={composeLabel}>Last name</Text>
        <TextInput
          style={composeInput}
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
        <Text style={composeLabel}>Phone</Text>
        <TextInput
          keyboardType="numeric"
          style={composeInput}
          value={phone}
          onChangeText={text => setUserName(setPhone)}
        />
        <Text style={composeLabel}>Password</Text>
        <PasswordInput value={password} onChange={setPassword} />
        <Text style={composeLabel}>Confirm password</Text>
        <PasswordInput value={confirmPassword} onChange={setConfirmPassword} />
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
