import React from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';

import {globalStyles} from 'global/styles';
import {LISTCOURSE} from 'global/constants';
import ScrollHorizontal from 'components/scrollHorizontal';
import {
  softwareDevelopment,
  IToperations,
  dataProfessional,
  securityProfessional,
} from 'data/home';

export default function Home({navigation}) {
  const handleSeeAll = (title, items) =>
    navigation.navigate(LISTCOURSE, {items, title});

  return (
    <ScrollView
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://www.stevejgordon.co.uk/wp-content/uploads/2020/04/Pluralsight-Free-April-2020-Wide.jpg',
        }}
      />
      <ScrollHorizontal
        component="course"
        title={softwareDevelopment.title}
        items={softwareDevelopment.listCourse}
        handleSeeAll={handleSeeAll}
      />
      <ScrollHorizontal
        component="course"
        title={IToperations.title}
        items={IToperations.listCourse}
        handleSeeAll={handleSeeAll}
      />
      <ScrollHorizontal
        component="course"
        title={dataProfessional.title}
        items={dataProfessional.listCourse}
        handleSeeAll={handleSeeAll}
      />
      <ScrollHorizontal
        component="course"
        title={securityProfessional.title}
        items={securityProfessional.listCourse}
        handleSeeAll={handleSeeAll}
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
