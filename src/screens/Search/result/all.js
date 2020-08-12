import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import _ from 'lodash';

import {globalStyles} from 'global/styles';
import {
  COURSESSEARCHRESULT,
  PATHSSEARCHRESULT,
  AUTHORSSEARCHRESULT,
} from 'global/constants';
import {COURSEDETAIL, PATHDETAIL, AUTHORDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import {dataProfessional} from 'data/home';
import {listPath, listTopAuthor} from 'data/browse';
import Course from 'components/course/horizontal';
import Path from 'components/path/horizontal';
import Author from 'components/author/horizontal';

export default function All({navigation, data}) {
  const {colors} = React.useContext(ThemeContext);

  console.log('all', data);

  const composeText = style =>
    StyleSheet.compose(
      style,
      colors.text,
    );

  const handleDetailCourse = () => navigation.navigate(COURSEDETAIL);
  const handleDetailPath = () =>
    navigation.navigate(PATHDETAIL, {title: 'Angular denver 2019'});
  const handleDetailAuthor = () => navigation.navigate(AUTHORDETAIL);

  return (
    <ScrollView
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <View style={styles.tab}>
        <View style={styles.info}>
          <Text style={composeText(styles.title)}>Courses</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate(COURSESSEARCHRESULT)}>
            <Text style={composeText(styles.btnText)}>
              {dataProfessional.listCourse.length} Results
            </Text>
            <IconEntypo name="chevron-right" color="#fff" size={13} />
          </TouchableOpacity>
        </View>
        {dataProfessional.listCourse.slice(0, 4).map(item => (
          <View key={Math.random().toString()}>
            <View
              style={StyleSheet.compose(
                styles.separator,
                colors.separator,
              )}
            />
            <Course item={item} handleDetail={handleDetailCourse} />
          </View>
        ))}
      </View>

      <View
        style={StyleSheet.compose(
          styles.separator,
          colors.separator,
        )}
      />
      <View style={styles.tab}>
        <View style={styles.info}>
          <Text style={composeText(styles.title)}>Paths</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate(PATHSSEARCHRESULT)}>
            <Text style={composeText(styles.btnText)}>
              {listPath.list.length} Results
            </Text>
            <IconEntypo name="chevron-right" color="#fff" size={13} />
          </TouchableOpacity>
        </View>
        {listPath.list.slice(0, 4).map(item => (
          <View key={Math.random().toString()}>
            <View
              style={StyleSheet.compose(
                styles.separator,
                colors.separator,
              )}
            />
            <Path item={item} handleDetail={handleDetailPath} />
          </View>
        ))}
      </View>

      <View
        style={StyleSheet.compose(
          styles.separator,
          colors.separator,
        )}
      />
      <View style={styles.tab}>
        <View style={styles.info}>
          <Text style={composeText(styles.title)}>Authors</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate(AUTHORSSEARCHRESULT)}>
            <Text style={composeText(styles.btnText)}>
              {listTopAuthor.list.length} Results
            </Text>
            <IconEntypo name="chevron-right" style={colors.text} size={13} />
          </TouchableOpacity>
        </View>
        {listTopAuthor.list.slice(0, 4).map(item => (
          <View key={Math.random().toString()}>
            <View
              style={StyleSheet.compose(
                styles.separator,
                colors.separator,
              )}
            />
            <Author item={item} handleDetail={handleDetailAuthor} />
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
  title: {fontSize: 18},
  btn: {flexDirection: 'row', alignItems: 'center'},
  btnText: {fontSize: 13},
  separator: {
    marginVertical: 15,
    height: 0.5,
    marginHorizontal: 10,
  },
});
