/* eslint-disable no-alert */
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
import _ from 'lodash';

import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import {sendActivateEmail} from 'api/user';

export default function ActiveEmail({navigation}) {
  const {colors} = React.useContext(ThemeContext);

  const [email, setEmail] = useState('');

  const handleActive = async () => {
    try {
      const res = await sendActivateEmail(email);
      alert(_.get(res, 'data.message', 'Kích hoạt tài khoản thành công'));
    } catch (err) {
      alert(
        _.get(err, 'response.data.message', 'Kích hoạt tài khoản thất bại'),
      );
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
              styles.title,
              colors.text,
            )}>
            Enter your email address and we'll send you a link to actitve email
          </Text>
          <Text
            style={StyleSheet.compose(
              styles.label,
              colors.text,
            )}>
            Email
          </Text>
          <TextInput
            style={StyleSheet.flatten([
              styles.input,
              colors.bgInput,
              colors.text,
            ])}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TouchableOpacity
            onPress={handleActive}
            style={StyleSheet.compose(
              styles.btn,
              colors.bgBtn,
            )}>
            <Text
              style={StyleSheet.compose(
                styles.btnText,
                colors.bgTextBtn,
              )}>
              Send email
            </Text>
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
    marginTop: 30,
  },
  title: {marginTop: 10, marginBottom: 5, fontSize: 20},
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
});
