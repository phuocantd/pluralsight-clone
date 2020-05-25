import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {globalStyles} from 'global/styles';

export default function Feedback({navigation}) {
  const [isAuth, setIsAuth] = useState(true);
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [typeFeedback, setTypeFeedback] = useState('General feedback');
  const [toggleCheckBox, setToggleCheckBox] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Send Feedback',
      headerRight: () => (
        <IconMaterialIcons
          style={styles.send}
          name="send"
          color="#ccc"
          size={20}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
      <View style={styles.content}>
        {!isAuth && (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={value => setEmail(value)}
            placeholder="Your email address"
            placeholderTextColor="#fff"
          />
        )}
        <Menu
          style={styles.threeDot}
          onSelect={value => setTypeFeedback(value)}>
          <MenuTrigger>
            <View style={styles.feedback}>
              <Text style={styles.txtFeedback}>{typeFeedback}</Text>
              <IconAntDesign name="caretdown" color="#fff" size={20} />
            </View>
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionText: {color: '#fff', fontSize: 20, margin: 10},
              optionsContainer: {
                backgroundColor: '#0D0F12',
                width: 220,
              },
            }}>
            <MenuOption value="General feedback" text="General feedback" />
            <MenuOption value="Feature request" text="Feature request" />
            <MenuOption value="Content request" text="Content request" />
            <MenuOption value="Bug report" text="Bug report" />
            <MenuOption
              value="Account or billing issue"
              text="Account or billing issue"
            />
          </MenuOptions>
        </Menu>
        <TextInput
          multiline
          value={feedback}
          onChangeText={value => setFeedback(value)}
          style={styles.input}
          placeholder="Your feedback"
          placeholderTextColor="#fff"
        />
        <Text style={styles.count}>{feedback.length} / 2000</Text>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() =>
            toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)
          }>
          {toggleCheckBox ? (
            <IconFontAwesome name="check-square-o" color="#fff" size={20} />
          ) : (
            <IconFontAwesome name="square-o" color="#fff" size={20} />
          )}
          <Text style={styles.txtCheckbox}>
            Would you like to be contacted about this by a member of the team?{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  send: {marginRight: 15},
  content: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: '#0D0F12',
    borderRadius: 6,
    color: '#fff',
    padding: 10,
    fontSize: 18,
  },
  count: {
    fontSize: 14,
    color: '#fff',
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  feedback: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: 15,
  },
  txtFeedback: {color: '#fff', fontSize: 18},
  checkbox: {flexDirection: 'row', marginTop: 20, alignItems: 'center'},
  txtCheckbox: {color: '#fff', marginLeft: 20, marginRight: 15, fontSize: 15},
});
