import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Topic from './topic';
import {listVideoCourse} from 'data/courseDetail';

export default function Contents() {
  const [data, setData] = useState(listVideoCourse);

  const handleMarkDown = index => {
    const newData = data.map((item, idx) =>
      index === idx ? {...item, isMarkdown: !item.isMarkdown} : item,
    );
    setData(newData);
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <Topic
          key={Math.random().toString()}
          index={index}
          item={item}
          handleMarkDown={handleMarkDown}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
