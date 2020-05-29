import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {ThemeContext} from 'tools/context/theme';
import Path from 'components/path/horizontal';

export default function ListPath({items, handleDetail}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <FlatList
      style={styles.list}
      data={items}
      renderItem={({item}) => <Path item={item} handleDetail={handleDetail} />}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => (
        <View
          style={StyleSheet.compose(
            styles.seperator,
            colors.seperator,
          )}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  },
  seperator: {
    height: 0.5,
    margin: 5,
  },
});
