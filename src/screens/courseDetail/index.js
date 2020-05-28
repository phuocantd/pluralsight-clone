/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import AuthorInfo from './author';
import MoreInfo from './moreInfo';
import ButtonControl from './buttonControl';
import Video from './video';
import Description from 'components/description';
import ButtonItem from './buttonItem';
import ListVideo from './listVideo';

const data = {
  title: 'Architecting for Reliability on AWS',
  image:
    'https://pluralsight.imgix.net/course-images/aws-architecting-reliability-v1.png',
  authors: [
    {
      name: 'Mike Pfeiffer',
      image:
        'https://pluralsight.imgix.net/author/lg/7171fd1a-7c0f-4c8a-bbc2-93da74eb4b32.png?w=200',
    },
    {
      name: 'joe eames',
      image: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200',
    },
  ],
  level: 'Intermediate',
  rating: 83,
  duration: '3h 34m',
  updated: 'May 2018',
  description:
    'Learn how to implement a highly available and reliable application architecture using the patterns and best practices recommended by AWS. In this course, Architecting for Reliability on AWS, you will first explore the key concepts and core services of AWS. Next, you will follow along step-by-step to implement a real-world application that is built with the reliability principles defined within the AWS Well Architected Framework. Finally, you will learn how to further increase the reliability of an application architecture on AWS by implementing multi-region solutions. By the end of this course, you will have a variety of AWS architecture skills for the real world.',
};

export default function CourseDetail() {
  const [isContent, setIsContent] = useState(true);
  return (
    <View style={styles.container}>
      <View>
        <Video image={data.image} />
      </View>
      <ScrollView style={styles.info} stickyHeaderIndices={[1]}>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.authors}>
            {data.authors.map(author => (
              <AuthorInfo
                key={Math.random().toString()}
                name={author.name}
                image={author.image}
              />
            ))}
          </View>
          <View style={styles.moreInfo}>
            <MoreInfo
              level={data.level}
              updated={data.updated}
              duration={data.duration}
              rating={data.rating}
            />
          </View>
          <View style={styles.btnControl}>
            <ButtonControl />
          </View>
          <View style={styles.description}>
            <Description description={data.description} />
          </View>
          <View>
            <ButtonItem />
          </View>
        </View>
        <View>
          <View style={styles.tabs}>
            <View style={isContent ? styles.tabActive : styles.tab}>
              <Text
                onPress={() => setIsContent(true)}
                style={isContent ? styles.textTabActive : styles.textTab}>
                Contents
              </Text>
            </View>
            <View style={!isContent ? styles.tabActive : styles.tab}>
              <Text
                onPress={() => setIsContent(false)}
                style={!isContent ? styles.textTabActive : styles.textTab}>
                Transcript
              </Text>
            </View>
          </View>
        </View>
        <ListVideo isContent={isContent} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#181C20'},
  info: {flex: 1},
  title: {color: '#fff', fontSize: 25},
  authors: {flexDirection: 'row'},
  moreInfo: {marginTop: 5},
  btnControl: {marginTop: 10},
  description: {marginTop: 20},
  tabs: {flexDirection: 'row'},
  tab: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#181C20',
    paddingBottom: 10,
    paddingTop: 20,
  },
  tabActive: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#181C20',
    paddingBottom: 10,
    paddingTop: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#0084BD',
  },
  textTab: {color: '#fff', textTransform: 'uppercase', fontSize: 20},
  textTabActive: {
    color: '#0084BD',
    textTransform: 'uppercase',
    fontSize: 20,
  },
});
