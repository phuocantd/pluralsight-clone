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
import {ThemeContext} from 'tools/context/theme';

export default function Login({navigation}) {
  const {colors} = React.useContext(ThemeContext);

  const [email, setEmail] = useState('');

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
            Enter your email address and we'll send you a link to reset your
            password
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
  title: {
    // color: '#fff',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
  },
  label: {
    // color: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    // backgroundColor: '#0D0F12',
    borderRadius: 6,
    // color: '#fff',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  btn: {
    marginTop: 15,
    alignItems: 'center',
    // backgroundColor: '#2968B2',
    borderRadius: 6,
  },
  btnText: {
    textTransform: 'uppercase',
    marginVertical: 10,
    // color: '#fff',
    fontSize: 15,
  },
});
