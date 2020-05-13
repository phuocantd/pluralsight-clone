import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import Course from 'components/course/horizontal';

export default function ListCourse({route, navigation}) {
  const {title, items} = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({item}) => <Course item={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
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
  list: {
    flex: 1,
    marginTop: 20,
  },
  seperator: {
    backgroundColor: '#fff',
    height: 0.5,
    margin: 5,
  },
});
