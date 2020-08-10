import React, {useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';

import {ThemeContext} from 'tools/context/theme';
import Course from 'components/course/vertical';

export default function Section({
  title,
  items,
  handleSeeAll,
  handleDetail,
  self,
}) {
  const {colors} = useContext(ThemeContext);
  if (!items || _.isEmpty(items)) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={StyleSheet.compose(
            styles.title,
            colors.text,
          )}>
          {title}
        </Text>
        {handleSeeAll && (
          <TouchableOpacity onPress={() => handleSeeAll(title, items)}>
            <Text
              style={StyleSheet.compose(
                styles.seeAll,
                colors.text,
              )}>
              {'See all >'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map(item => (
          <Course
            self={self}
            key={item.id}
            item={item}
            handleDetail={handleDetail}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 5,
    marginTop: 10,
    fontSize: 17,
  },
  seeAll: {
    marginTop: 14,
    marginRight: 10,
    fontSize: 13,
  },
});
