import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {ThemeContext} from 'tools/context/theme';

export default function PasswordInput({onChange, value}) {
  const {colors} = React.useContext(ThemeContext);

  const [icon, setIcon] = useState('eye-with-line');
  const [hide, setHide] = useState(true);

  const changeIcon = () => {
    setIcon(icon === 'eye' ? 'eye-with-line' : 'eye');
    setHide(!hide);
  };

  return (
    <View
      style={StyleSheet.compose(
        styles.searchSection,
        colors.bgInput,
      )}>
      <TextInput
        style={StyleSheet.compose(
          styles.input,
          colors.text,
        )}
        secureTextEntry={hide}
        onChangeText={e => onChange(e)}
        value={value}
      />
      {value !== '' && (
        <Icon
          style={StyleSheet.compose(
            styles.searchIcon,
            colors.text,
          )}
          name={icon}
          size={18}
          onPress={changeIcon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
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
  },
});
