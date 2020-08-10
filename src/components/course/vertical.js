import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import _ from 'lodash';

import {COURSEDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import InfoCourse from './info';
import InfoCourse2 from './info2';

export default function Course({item, handleDetail, self}) {
  const {colors} = React.useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={StyleSheet.compose(
        styles.item,
        colors.background3,
      )}
      onPress={() => handleDetail(COURSEDETAIL, item.id)}>
      <Image
        style={styles.image}
        source={{uri: self ? item.courseImage : item.imageUrl}}
      />
      <Menu style={styles.threeDot} onSelect={value => console.log(value)}>
        <MenuTrigger>
          <IconEntypo
            name="dots-three-vertical"
            style={styles.icon}
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
          <MenuOption value="Bookmark" text="Bookmark" />
          <MenuOption value="AddChannel" text="Add to channel" />
          <MenuOption value="Download" text="Download" />
          <MenuOption value="Share" text="Share" />
        </MenuOptions>
      </Menu>

      {self ? (
        <InfoCourse2 title={item.courseTitle} author={item.instructorName} />
      ) : (
        <InfoCourse
          title={item.title || ''}
          author={_.get(item, 'instructor.user.name', '')}
          duration={item.totalHours || ''}
          level={item.status || ''}
          updated={item.updatedAt || new Date()}
          rating={item.ratedNumber}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 200,
    margin: 5,
    borderWidth: 1,
    borderColor: '#1E2429',
  },
  image: {
    alignSelf: 'center',
    width: 198,
    height: 100,
  },
  icon: {color: 'white'},
  threeDot: {position: 'absolute', top: 10, right: 5},
});
