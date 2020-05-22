import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import {globalStyles} from 'global/styles';
import Description from './description';
import Course from 'components/course/horizontal';

export default function PathDetail({navigation, route}) {
  const {title} = route.params;
  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://pluralsight2.imgix.net/paths/images/angular-denver-2019-639c79599c.png',
            }}
          />
          <View>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.count}>44 courses 15 hours</Text>
          </View>
        </View>
        <Description desciption="Angular Denver is the coolest Angular conference east of the Continental Divide! Angular developers come from all over to spend two days learning, connecting, and having fun. With around 50 different topics, including authentication, facades, observables, accessibility, and inclusivity in development, there is something for everyone to level-up their developing skills." />
        <View>
          <Text style={styles.titleCourse}>{title}</Text>
          {Array(44)
            .fill(null)
            .map((i, index) => ({
              image:
                'https://pluralsight.imgix.net/course-images/angular-denver-2019-session-43-v2.jpg',
              courseTitle: `Course ${index}`,
              author: 'Angular Denver',
              level: 'Intermedia',
              updated: 'September 2019',
              duration: 24,
            }))
            .map(item => (
              <View>
                <View style={styles.seperator} />
                <Course key={Math.random().toString()} item={item} />
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  name: {
    fontSize: 25,
    color: '#fff',
  },
  count: {color: '#Fff', fontSize: 15},
  titleCourse: {
    color: '#fff',
    fontSize: 25,
    marginLeft: 10,
    marginTop: 20,
  },
  seperator: {
    backgroundColor: '#fff',
    height: 0.5,
    margin: 5,
  },
});
