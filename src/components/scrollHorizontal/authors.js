import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import Author from 'components/author';

export default function Authorscroll({title, items, handleDetail}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map(item => (
          <Author
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
