import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import Course from 'components/course/horizontal';

export default function ListCourse({items, handleDetail, headerComponent}) {
  const {colors} = React.useContext(ThemeContext);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <FlatList
        style={styles.list}
        data={items}
        ListHeaderComponent={headerComponent}
        renderItem={({item}) => (
          <Course item={item} handleDetail={handleDetail} />
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
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
