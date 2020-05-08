import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SectionItem({item}) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => console.log(`${item.courseTitle} clicked!!!`)}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View>
        <Text style={styles.title}>{item.courseTitle}</Text>
        <Text style={styles.info}>{item.author}</Text>
        <Text style={styles.info}>
          {`${item.level} ${item.updated} ${item.duration}`}
        </Text>
        {item.rating > 0 && (
          <View style={styles.rate}>
            <View style={styles.star}>
              <Icon name="star" color="#FAD000" size={13} />
              <Icon name="star" color="#FAD000" size={13} />
              <Icon name="star" color="#FAD000" size={13} />
              <Icon name="star" color="#FAD000" size={13} />
              <Icon name="star-half-full" color="#FAD000" size={13} />
            </View>
            <Text style={styles.info}>({item.rating})</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 200,
    backgroundColor: '#1E2429',
    margin: 5,
  },
  image: {
    width: 200,
    height: 100,
  },
  title: {
    marginTop: 5,
    marginHorizontal: 5,
    color: '#eee',
    fontSize: 15,
  },
  info: {
    marginHorizontal: 5,
    color: '#fff',
    fontSize: 12,
  },
  rate: {
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
    marginTop: 3,
  },
});
