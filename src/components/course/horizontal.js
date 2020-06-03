import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import {ThemeContext} from 'tools/context/theme';
import InfoCourse from './info';

export default function Course({item, handleDetail}) {
  const {colors} = React.useContext(ThemeContext);

  return (
    <TouchableOpacity style={styles.item} onPress={handleDetail}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.info}>
        <InfoCourse
          title={item.courseTitle}
          author={item.author}
          duration={item.duration}
          level={item.level}
          updated={item.updated}
          rating={item.rating}
        />
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
          <MenuOption value="Bookmark" text="Bookmark" />
          <MenuOption value="AddChannel" text="Add to channel" />
          <MenuOption value="Download" text="Download" />
          <MenuOption value="Share" text="Share" />
        </MenuOptions>
      </Menu>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {margin: 10, flexDirection: 'row', alignItems: 'center'},
  image: {width: 120, height: 70},
  info: {marginLeft: 10, flex: 1},
});
