import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Course from 'components/course/vertical';

export default function Section({title, items, handleSeeAll, handleDetail}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => handleSeeAll(title, items)}>
          <Text style={styles.seeAll}>See all ></Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map(item => (
          <Course
            key={Math.random().toString()}
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
    color: '#fff',
    fontSize: 17,
  },
  seeAll: {
    marginTop: 14,
    marginRight: 10,
    color: '#fff',
    fontSize: 13,
  },
});
