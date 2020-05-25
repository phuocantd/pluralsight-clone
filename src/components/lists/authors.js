import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import Author from 'components/author/horizontal';

export default function ListPath({items, handleDetail}) {
  return (
    <FlatList
      style={styles.list}
      data={items}
      renderItem={({item}) => (
        <Author item={item} handleDetail={handleDetail} />
      )}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  );
}

const styles = StyleSheet.create({
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
