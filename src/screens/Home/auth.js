import React from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';

import {LISTCOURSE} from 'global/constants';
import CourseScroll from 'components/scrollHorizontal/courses';
import {
  softwareDevelopment,
  IToperations,
  dataProfessional,
  securityProfessional,
} from 'data/home';

export default function AuthHome({navigation}) {
  const handleSeeAll = (title, items) =>
    navigation.navigate(LISTCOURSE, {items, title});

  const handleDetailCourse = screen => navigation.navigate(screen);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://financesonline.com/uploads/2019/08/Pluralsight-logo1.png',
        }}
      />
      <CourseScroll
        title={softwareDevelopment.title}
        items={softwareDevelopment.listCourse}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      />
      <CourseScroll
        title={IToperations.title}
        items={IToperations.listCourse}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      />
      <CourseScroll
        title={dataProfessional.title}
        items={dataProfessional.listCourse}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      />
      <CourseScroll
        title={securityProfessional.title}
        items={securityProfessional.listCourse}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {height: 100},
  txt: {
    color: '#fff',
  },
});
