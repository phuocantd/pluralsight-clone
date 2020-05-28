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
          <Text style={styles.label}>Email or username</Text>
          <TextInput
            style={styles.input}
            value={userName}
            onChangeText={text => setUserName(text)}
          />
          <Text style={styles.label}>Password</Text>
          <PasswordInput value={password} onChange={setPassword} />
          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btnText}>sign in</Text>
          </TouchableOpacity>
          <View style={styles.mt}>
            <TouchableOpacity
              style={styles.btnLabel}
              onPress={
                () => navigation.navigate(FORGOTPASSWORD)
                // Linking.openURL('https://app.pluralsight.com/id/forgotpassword')
              }>
              <Text style={styles.labelText}>forgot password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.border}>
            <TouchableOpacity style={styles.btnLabel}>
              <Text style={styles.labelText}>use single sign-on (sso)</Text>
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
              <Text style={styles.labelText}>sign up free</Text>
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
