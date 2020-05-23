import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {globalStyles} from 'global/styles';
import {COURSEDETAIL, PATHDETAIL} from 'global/constants';
import {dataProfessional} from 'data/home';
import {listPath, listTopAuthor} from 'data/browse';
import Course from 'components/course/horizontal';
import Path from 'components/path/horizontal';
import Author from '../../../components/author/horizontal';

export default function All({navigation}) {
  const handleDetailCourse = () => navigation.navigate(COURSEDETAIL);
  const handleDetailPath = () =>
    navigation.navigate(PATHDETAIL, {title: 'Angular denver 2019'});
  // const handleDetailAuthor = () => navigation.navigate(COURSEDETAIL);
  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.tab}>
        <View style={styles.info}>
          <Text style={styles.title}>Courses</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>
              {dataProfessional.listCourse.length} Results
            </Text>
          </TouchableOpacity>
        </View>
        {dataProfessional.listCourse.slice(0, 4).map(item => (
          <View key={Math.random().toString()}>
            <View style={styles.separator} />
            <Course item={item} handleDetail={handleDetailCourse} />
          </View>
        ))}
      </View>

      <View style={styles.separator} />
      <View style={styles.tab}>
        <View style={styles.info}>
          <Text style={styles.title}>Paths</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{listPath.list.length} Results</Text>
          </TouchableOpacity>
        </View>
        {listPath.list.slice(0, 4).map(item => (
          <View key={Math.random().toString()}>
            <View style={styles.separator} />
            <Path item={item} handleDetail={handleDetailPath} />
          </View>
        ))}
      </View>

      <View style={styles.separator} />
      <View style={styles.tab}>
        <View style={styles.info}>
          <Text style={styles.title}>Authors</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>
              {listTopAuthor.list.length} Results
            </Text>
          </TouchableOpacity>
        </View>
        {listTopAuthor.list.slice(0, 4).map(item => (
          <View key={Math.random().toString()}>
            <View style={styles.separator} />
            <Author item={item} handleDetail={handleDetailCourse} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tab: {},
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {color: '#fff', fontSize: 18},
  btn: {},
  btnText: {color: '#fff', fontSize: 15},
  separator: {
    backgroundColor: '#fff',
    marginVertical: 5,
    height: 0.5,
    marginHorizontal: 10,
  },
});
