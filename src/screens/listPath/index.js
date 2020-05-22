import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {PATHDETAIL} from '../../global/constants';
import Path from 'components/path/horizontal';

export default function ListPath({route, navigation}) {
  const {items} = route.params;

  const handleDetail = () =>
    navigation.navigate(PATHDETAIL, {title: 'Angular denver 2019'});

  return (
    <View style={globalStyles.container}>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({item}) => (
          <Path item={item} handleDetail={handleDetail} />
        )}
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
