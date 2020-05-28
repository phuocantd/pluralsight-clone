import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {COURSEDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import ListCourse from 'components/lists/courses';

export default function ListCourseScreen({route, navigation}) {
  const {colors} = React.useContext(ThemeContext);

  const {title, items} = route.params;

  const handleDetailCourse = () => navigation.navigate(COURSEDETAIL);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <Text
        style={StyleSheet.compose(
          styles.title,
          colors.text,
        )}>
        {title}
      </Text>
      <ListCourse items={items} handleDetail={handleDetailCourse} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 25,
    marginLeft: 10,
    marginTop: 20,
  },
});
