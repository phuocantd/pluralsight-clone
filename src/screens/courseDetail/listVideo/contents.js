import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function Contents() {
  return (
    <View>
      {Array(50)
        .fill(null)
        .map((item, index) => (
          <Item key={Math.random().toString()} title={index} />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
