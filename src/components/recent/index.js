import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default function Recent({list, setList}) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.recentText}>Recent searches</Text>
        <TouchableOpacity onPress={() => setList([])}>
          <Text style={styles.clear}>CLEAR ALL</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.listRecent}
        keyExtractor={item => item.id}
        data={list}
        renderItem={({item}) => (
          <View style={styles.itemRecent}>
            <IconEntypo
              style={styles.iconTime}
              name="back-in-time"
              color="#fff"
              size={16}
            />
            <Text style={styles.textRecent}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#0D0F12',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    fontSize: 23,
    marginLeft: 15,
    color: '#fff',
    borderBottomWidth: 0.4,
    borderBottomColor: '#fff',
  },
  iconClear: {
    marginRight: 10,
    paddingRight: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: '#fff',
    marginTop: 15,
  },
  header: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listRecent: {
    marginTop: 10,
  },
  recentText: {color: '#fff', fontSize: 18},
  clear: {color: 'blue', fontSize: 18},
  itemRecent: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  iconTime: {
    marginTop: 3,
  },
  textRecent: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
});
