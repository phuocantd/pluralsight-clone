import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import SectionItem from '../sectionItem';

export default function Section({title, listCourse}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {listCourse.map(item => (
          <SectionItem item={item} key={Math.random().toString()} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  title: {
    marginLeft: 5,
    marginTop: 10,
    color: '#fff',
    fontSize: 17,
  },
});
