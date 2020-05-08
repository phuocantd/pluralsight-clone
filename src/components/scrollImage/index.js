import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import ImageButton from '../imageButtonSmall';

export default function ScrollImage({items}) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.colItem}>
        <View style={styles.rowItem}>
          {items
            .filter((item, index) => index % 2 === 0)
            .map(item => (
              <ImageButton
                key={Math.random().toString()}
                url={item.url}
                title={item.title}
              />
            ))}
        </View>
        <View style={styles.rowItem}>
          {items
            .filter((item, index) => index % 2 !== 0)
            .map(item => (
              <ImageButton
                key={Math.random().toString()}
                url={item.url}
                title={item.title}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rowItem: {
    flexDirection: 'row',
  },
  colItem: {
    flexDirection: 'column',
  },
});
