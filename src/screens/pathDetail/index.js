import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import Description from 'components/description';
import Course from 'components/course/horizontal';

export default function PathDetail({navigation, route}) {
  const {colors, mode} = React.useContext(ThemeContext);

  const {title} = route.params;
  return (
    <ScrollView
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Image
            style={styles.image}
            source={{
              uri:
                mode === 'dark'
                  ? 'https://pluralsight2.imgix.net/paths/images/angular-denver-2019-639c79599c.png'
                  : 'https://pluralsight.imgix.net/author/lg/7283fc45-f9e3-4298-9862-89653a627c8c.png',
            }}
          />
          <View>
            <Text
              style={StyleSheet.compose(
                styles.name,
                colors.text,
              )}>
              {title}
            </Text>
            <Text
              style={StyleSheet.compose(
                styles.count,
                colors.text,
              )}>
              44 courses 15 hours
            </Text>
          </View>
        </View>
        <Description description="Angular Denver is the coolest Angular conference east of the Continental Divide! Angular developers come from all over to spend two days learning, connecting, and having fun. With around 50 different topics, including authentication, facades, observables, accessibility, and inclusivity in development, there is something for everyone to level-up their developing skills." />
        <View>
          <Text
            style={StyleSheet.compose(
              styles.titleCourse,
              colors.text,
            )}>
            {title}
          </Text>
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
              <View key={Math.random().toString()}>
                <View
                  style={StyleSheet.compose(
                    styles.separator,
                    colors.separator,
                  )}
                />
                <Course key={Math.random().toString()} item={item} />
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  image: {width: 100, height: 100},
  title: {flexDirection: 'row', alignItems: 'center', marginVertical: 20},
  name: {fontSize: 25},
  count: {fontSize: 15},
  titleCourse: {fontSize: 25, marginLeft: 10, marginTop: 20},
  separator: {height: 0.5, margin: 5},
});
