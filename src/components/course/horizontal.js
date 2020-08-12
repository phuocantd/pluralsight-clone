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

export default function Course({item, handleDetail, search}) {
  const {colors} = React.useContext(ThemeContext);

  return (
    <TouchableOpacity style={styles.item} onPress={() => handleDetail(item.id)}>
      <Image
        style={styles.image}
        source={{
          uri: item.imageUrl,
        }}
      />
      <View style={styles.info}>
        <InfoCourse
          learnWhat={item.learnWhat}
          title={item.title}
          author={item['instructor.user.name']}
          duration={item.totalHours}
          level={item.status}
          updated={item.updatedAt}
          rating={item.ratedNumber}
        />
      </View>
      {!search && (
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
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {margin: 10, flexDirection: 'row', alignItems: 'center'},
  image: {width: 120, height: 70},
  info: {marginLeft: 10, flex: 1},
});
