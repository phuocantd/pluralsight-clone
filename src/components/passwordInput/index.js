import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function PasswordInput({onChange, value}) {
  const [icon, setIcon] = useState('eye-with-line');
  const [hide, setHide] = useState(true);

  const changeIcon = () => {
    setIcon(icon === 'eye' ? 'eye-with-line' : 'eye');
    setHide(!hide);
  };

  return (
    <View style={styles.searchSection}>
      <TextInput
        style={styles.input}
        secureTextEntry={hide}
        onChangeText={e => onChange(e)}
        value={value}
      />
      <Icon
        style={styles.searchIcon}
        name={icon}
        color="#fff"
        size={18}
        onPress={changeIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#0D0F12',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginLeft: 10,
    fontSize: 18,
    color: '#fff',
  },
});
