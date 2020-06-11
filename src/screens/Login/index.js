import React, {useState, useContext} from 'react';
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
import {REGISTER, FORGOTPASSWORD} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import PasswordInput from 'components/passwordInput';
import {AuthContext} from 'tools/context/auth';

export default function Login({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {state, authContext} = useContext(AuthContext);
  const {colors} = React.useContext(ThemeContext);

  React.useEffect(() => {
    if (state.isAuth) {
      navigation.goBack();
    }
  }, [state, navigation]);

  const handleLogin = () => {
    authContext.signIn('phuocantd');
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
            Email or username
          </Text>
          <TextInput
            style={StyleSheet.flatten([
              styles.input,
              colors.bgInput,
              colors.text,
            ])}
            value={userName}
            onChangeText={text => setUserName(text)}
          />
          <Text
            style={StyleSheet.compose(
              styles.label,
              colors.text,
            )}>
            Password
          </Text>
          <PasswordInput value={password} onChange={setPassword} />
          <TouchableOpacity
            style={StyleSheet.compose(
              styles.btn,
              colors.bgBtn,
            )}
            onPress={handleLogin}>
            <Text
              style={StyleSheet.compose(
                styles.btnText,
                colors.bgTextBtn,
              )}>
              sign in
            </Text>
          </TouchableOpacity>
          <View style={styles.mt}>
            <TouchableOpacity
              style={styles.btnLabel}
              onPress={
                () => navigation.navigate(FORGOTPASSWORD)
                // Linking.openURL('https://app.pluralsight.com/id/forgotpassword')
              }>
              <Text
                style={StyleSheet.compose(
                  styles.labelText,
                  colors.textBtn,
                )}>
                forgot password
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={StyleSheet.compose(
              styles.border,
              colors.btn,
            )}>
            <TouchableOpacity style={styles.btnLabel}>
              <Text
                style={StyleSheet.compose(
                  styles.labelText,
                  colors.textBtn,
                )}>
                use single sign-on (sso)
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mt}>
            <TouchableOpacity
              style={styles.btnLabel}
              onPress={
                () => navigation.navigate(REGISTER)
                // Linking.openURL(
                // 'https://www.pluralsight.com/product/skills/free?acta=freemium_mobile_signup',
                // )
              }>
              <Text
                style={StyleSheet.compose(
                  styles.labelText,
                  colors.textBtn,
                )}>
                sign up free
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
  btn: {marginTop: 15, alignItems: 'center', borderRadius: 6},
  btnText: {textTransform: 'uppercase', marginVertical: 10, fontSize: 15},
  border: {borderRadius: 6, borderWidth: 1, marginTop: 15},
  mt: {marginTop: 15},
  btnLabel: {alignItems: 'center'},
  labelText: {textTransform: 'uppercase', marginVertical: 10, fontSize: 15},
});
