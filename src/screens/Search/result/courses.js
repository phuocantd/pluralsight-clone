import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import {globalStyles} from 'global/styles';
import {COURSEDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import {dataProfessional} from 'data/home';
import ListCourse from 'components/lists/courses';

export default function Courses({navigation}) {
  const {colors} = React.useContext(ThemeContext);

  const [timeFilter, setTimeFilter] = useState('Newest');

  const handleDetailCourse = () => navigation.navigate(COURSEDETAIL);
  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <Text
        style={StyleSheet.compose(
          styles.selectLevel,
          colors.icon,
        )}>
        Skill level
      </Text>
      <View style={styles.info}>
        <Text
          style={StyleSheet.compose(
            styles.result,
            colors.icon,
          )}>
          {dataProfessional.listCourse.length} Results
        </Text>
        <Menu style={colors.text} onSelect={value => setTimeFilter(value)}>
          <MenuTrigger>
            <Text
              style={StyleSheet.compose(
                styles.result,
                colors.icon,
              )}>
              {timeFilter}
            </Text>
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionText: StyleSheet.compose(
                {fontSize: 20, margin: 10},
                colors.text,
              ),
              optionsContainer: StyleSheet.compose(
                {width: 220},
                colors.background1,
              ),
            }}>
            <MenuOption value="Newest" text="Newest" />
            <MenuOption value="Relevance" text="Relevance" />
          </MenuOptions>
        </Menu>
      </View>
      <ListCourse
        items={dataProfessional.listCourse}
        handleDetail={handleDetailCourse}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectLevel: {
    fontSize: 13,
    marginTop: 20,
    marginLeft: 20,
  },
  info: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  result: {fontSize: 13},
});
