import React, {useState, useLayoutEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  Keyboard,
} from 'react-native';
// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-popup-menu';
// import IconAntDesign from 'react-native-vector-icons/AntDesign';
// import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';

import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import {AuthContext} from '../../tools/context/auth';
import {sendFeedback} from 'src/api/feedback';

export default function Feedback({navigation}) {
  const {colors} = useContext(ThemeContext);
  const {state} = useContext(AuthContext);

  // const [email, setEmail] = useState('');
  // const [feedback, setFeedback] = useState('');
  // const [typeFeedback, setTypeFeedback] = useState('General feedback');
  // const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  useLayoutEffect(() => {
    const handleSendFeedback = async () => {
      Keyboard.dismiss();
      try {
        const res = await sendFeedback(state.token, subject, content);
        if (_.get(res, 'data.message', '') === 'OK') {
          ToastAndroid.show('Phản hồi thành công', ToastAndroid.SHORT);
        } else {
          throw 'Fail';
        }
      } catch (error) {
        ToastAndroid.show('Phản hồi thất bại', ToastAndroid.SHORT);
      }
    };
    navigation.setOptions({
      title: 'Send Feedback',
      headerRight: () => (
        <TouchableOpacity onPress={() => handleSendFeedback()}>
          <IconMaterialIcons
            style={StyleSheet.compose(
              styles.send,
              colors.icon,
            )}
            name="send"
            size={20}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, colors, subject, content]);

  const composeText = style =>
    StyleSheet.compose(
      style,
      colors.text,
    );

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <View style={styles.content}>
        {/* {!state.isAuth && (
          <TextInput
            style={StyleSheet.flatten([
              styles.input,
              colors.bgInput,
              colors.text,
            ])}
            value={email}
            onChangeText={value => setEmail(value)}
            placeholder="Your email address"
            placeholderTextColor={colors.placeHolder.color}
          />
        )} */}
        {/* <Menu onSelect={value => setTypeFeedback(value)}>
          <MenuTrigger>
            <View style={styles.feedback}>
              <Text style={composeText(styles.txtFeedback)}>
                {typeFeedback}
              </Text>
              <IconAntDesign name="caretdown" style={colors.text} size={20} />
            </View>
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionText: StyleSheet.compose(
                {fontSize: 20, margin: 10},
                colors.text,
              ),
              optionsContainer: StyleSheet.compose(
                {
                  width: 220,
                },
                colors.background1,
              ),
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
        </Menu> */}
        <TextInput
          // multiline
          value={subject}
          onChangeText={value => setSubject(value)}
          style={StyleSheet.flatten([
            styles.input,
            colors.bgInput,
            colors.text,
          ])}
          placeholder="Your subject"
          placeholderTextColor={colors.placeHolder.color}
        />
        <TextInput
          // multiline
          value={content}
          onChangeText={value => setContent(value)}
          style={StyleSheet.flatten([
            styles.input,
            colors.bgInput,
            colors.text,
          ])}
          placeholder="Your content"
          placeholderTextColor={colors.placeHolder.color}
        />
        <Text style={composeText(styles.count)}>{content.length} / 2000</Text>
        {/* <TouchableOpacity
          style={styles.checkbox}
          onPress={() =>
            toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)
          }>
          {toggleCheckBox ? (
            <IconFontAwesome
              name="check-square-o"
              style={colors.text}
              size={20}
            />
          ) : (
            <IconFontAwesome name="square-o" style={colors.text} size={20} />
          )}
          <Text style={composeText(styles.txtCheckbox)}>
            Would you like to be contacted about this by a member of the team?{' '}
          </Text>
        </TouchableOpacity> */}
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
    borderRadius: 6,
    padding: 10,
    fontSize: 18,
    marginTop: 10,
  },
  count: {
    fontSize: 14,
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  feedback: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: 15,
  },
  txtFeedback: {fontSize: 18},
  checkbox: {flexDirection: 'row', marginTop: 20, alignItems: 'center'},
  txtCheckbox: {marginLeft: 20, marginRight: 15, fontSize: 15},
});
