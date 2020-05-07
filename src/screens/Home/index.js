import React from 'react';
import {Image, Text, StyleSheet, ScrollView} from 'react-native';

import {globalStyles} from 'styles/global';
import Section from 'components/section';
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
      <Section
        title={softwareDevelopment.title}
        listCourse={softwareDevelopment.listCourse}
      />
      <Section
        title={IToperations.title}
        listCourse={IToperations.listCourse}
      />
      <Section
        title={dataProfessional.title}
        listCourse={dataProfessional.listCourse}
      />
      <Section
        title={securityProfessional.title}
        listCourse={securityProfessional.listCourse}
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
