import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import {ThemeContext} from 'tools/context/theme';
import Author from 'components/author';

export default function Authorscroll({title, items, handleDetail}) {
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
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map(item => (
          <Author key={item.id} item={item} handleDetail={handleDetail} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 15},
  header: {flexDirection: 'row', justifyContent: 'space-between'},
  title: {marginLeft: 5, marginTop: 10, fontSize: 17},
});
