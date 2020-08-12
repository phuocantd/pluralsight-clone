import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {ThemeContext} from 'tools/context/theme';
import Author from 'components/author/horizontal';
import Author2 from 'components/author/search';

export default function ListAuthor({items, handleDetail, search}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <FlatList
      style={styles.list}
      data={items}
      renderItem={({item}) =>
        search ? (
          <Author2 item={item} handleDetail={() => handleDetail(item.id)} />
        ) : (
          <Author item={item} handleDetail={handleDetail} />
        )
      }
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => (
        <View
          style={StyleSheet.compose(
            styles.separator,
            colors.separator,
          )}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {flex: 1, marginTop: 20},
  separator: {height: 0.5, margin: 5},
});
