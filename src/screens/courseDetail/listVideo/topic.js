import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import _ from 'lodash';

import {ThemeContext} from 'tools/context/theme';
import Period from './period';

export default function Topic({
  item,
  index,
  handleMarkDown,
  handlePressLesson,
}) {
  const {colors} = useContext(ThemeContext);

  const handleBookMark = () => {
    handleMarkDown && handleMarkDown(index);
    // console.log(item);
  };

  // console.log({item});

  return (
    <View>
      <View style={styles.item}>
        <View style={styles.info}>
          <View
            style={StyleSheet.compose(
              styles.index,
              colors.background2,
            )}>
            <Text
              style={StyleSheet.compose(
                styles.textIndex,
                colors.text,
              )}>
              {index}
            </Text>
            {/* {item.isMarkdown && (
              <IconEntypo
                name="bookmark"
                size={20}
                style={StyleSheet.compose(
                  styles.markdown,
                  colors.text,
                )}
              />
            )} */}
          </View>
          <View style={styles.nameDetail}>
            <Text
              style={StyleSheet.compose(
                styles.name,
                colors.text,
              )}>
              {item.name}
            </Text>
            <Text style={colors.text}>{item.sumHours}h</Text>
          </View>
        </View>
        <Menu style={styles.threeDot} onSelect={value => console.log(value)}>
          <MenuTrigger>
            <IconEntypo
              name="dots-three-vertical"
              style={colors.icon}
              size={20}
            />
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
            <MenuOption
              value="bookmark"
              text={item.isMarkdown ? 'Unbookmark' : 'Bookmark'}
              onSelect={handleBookMark}
            />
            <MenuOption value="download" text="Download Module" />
          </MenuOptions>
        </Menu>
      </View>
      {item &&
        item.lesson &&
        _.get(item, 'lesson', []).map(lesson => (
          <TouchableOpacity
            key={lesson.id}
            onPress={() => handlePressLesson(lesson)}>
            <Period item={lesson} />
          </TouchableOpacity>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  index: {
    width: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIndex: {fontSize: 20},
  info: {flexDirection: 'row', flex: 1},
  nameDetail: {marginLeft: 10, flexDirection: 'column', flex: 1},
  name: {fontSize: 18},
  markdown: {position: 'absolute', left: 0, bottom: 0},
});
