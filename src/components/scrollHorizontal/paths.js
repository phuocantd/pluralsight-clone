import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {ThemeContext} from 'tools/context/theme';
import Path from 'components/path';

export default function PathScroll({title, items, handleSeeAll, handleDetail}) {
  const {colors} = React.useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={StyleSheet.compose(
            styles.title,
            colors.text,
          )}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => handleSeeAll(title, items)}>
          {handleSeeAll && (
            <Text
              style={StyleSheet.compose(
                styles.seeAll,
                colors.text,
              )}>
              See all {'>'}
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map(item => (
          <Path key={item.id} item={item} handleDetail={handleDetail} />
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
    fontSize: 17,
  },
  seeAll: {
    marginTop: 14,
    marginRight: 10,
    fontSize: 13,
  },
});
