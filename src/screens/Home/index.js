import React from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';

import {globalStyles} from 'styles/global';
import ScrollHorizontal from 'components/scrollHorizontal';
import {
  softwareDevelopment,
  IToperations,
  dataProfessional,
  securityProfessional,
} from 'data/home';

export default function Home() {
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
      />
      <ScrollHorizontal
        component="course"
        title={IToperations.title}
        items={IToperations.listCourse}
      />
      <ScrollHorizontal
        component="course"
        title={dataProfessional.title}
        items={dataProfessional.listCourse}
      />
      <ScrollHorizontal
        component="course"
        title={securityProfessional.title}
        items={securityProfessional.listCourse}
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
