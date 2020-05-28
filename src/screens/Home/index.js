import React, {useContext} from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';

import {globalStyles} from 'global/styles';
import {LISTCOURSE} from 'global/constants';
import CourseScroll from 'components/scrollHorizontal/courses';
import {
  softwareDevelopment,
  IToperations,
  dataProfessional,
  securityProfessional,
} from 'data/home';
import {ThemeContext} from 'tools/context/theme';

export default function Home({navigation}) {
  const {colors} = useContext(ThemeContext);

  const handleSeeAll = (title, items) =>
    navigation.navigate(LISTCOURSE, {items, title});

  const handleDetailCourse = screen => navigation.navigate(screen);

  return (
    <ScrollView
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}
      showsVerticalScrollIndicator={false}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://www.stevejgordon.co.uk/wp-content/uploads/2020/04/Pluralsight-Free-April-2020-Wide.jpg',
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
