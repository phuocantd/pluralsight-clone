import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {listTopAuthor} from 'data/browse';
import ListAuthor from 'components/lists/authors';

export default function Authors({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.result}>{listTopAuthor.list.length} Result</Text>
      <ListAuthor
        items={listTopAuthor.list}
        handleDetail={() => console.log('clicked')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    color: '#fff',
    fontSize: 13,
    marginTop: 20,
    marginLeft: 20,
  },
});
