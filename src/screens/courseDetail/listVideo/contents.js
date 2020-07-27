import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import _ from 'lodash';

import Topic from './topic';

export default function Contents({sections, handlePressLesson}) {
  // const [data, setData] = useState(listVideoCourse);

  // const handleMarkDown = index => {
  //   const newData = data.map((item, idx) =>
  //     index === idx ? {...item, isMarkdown: !item.isMarkdown} : item,
  //   );
  //   setData(newData);
  // };

  // console.log({sections});

  return (
    <View style={styles.container}>
      {sections &&
        !_.isEmpty(sections) &&
        sections.map((item, index) => (
          <Topic
            key={item.id}
            index={index}
            item={item}
            handlePressLesson={handlePressLesson}
            // handleMarkDown={handleMarkDown}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 10},
});
