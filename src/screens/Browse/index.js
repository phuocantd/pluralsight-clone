/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';

import {globalStyles} from 'global/styles';
import {
  PATHS,
  PATHDETAIL,
  AUTHORDETAIL,
  LOGIN,
  SKILL,
  FEATURE,
  LISTCOURSE,
} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import {AuthContext} from 'tools/context/auth';
// import {imageScroll, listPath, listSkill} from 'data/browse';
// import ImageButton from 'components/imageButtonMedium';
// import ScrollImage from 'components/scrollImage';
// import SkillScroll from 'components/scrollHorizontal/skills';
// import PathScroll from 'components/scrollHorizontal/paths';
import AuthorScroll from 'components/scrollHorizontal/authors';
import {getInstructors} from 'api/instructor';
import {getCategories} from 'api/category';
import Axios from 'axios';
import Loading from 'src/components/Loading';
import {getTopSell, getTopNew, getTopRate} from 'src/api/course';
import CourseScroll from 'components/scrollHorizontal/courses';

export default function Browse({navigation}) {
  // const [data, setData] = useState({authors: []});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  // const [dataAuthors, setDataAuthors] = useState([]);
  // const [dataCategories, setDataCategories] = useState([]);

  const {colors} = useContext(ThemeContext);
  const {state} = useContext(AuthContext);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // const resAuthor = await getInstructors();
    // const resCategories = await getCategories();
    const arrApi = [
      getInstructors(),
      getCategories(),
      getTopSell(10, 1),
      getTopNew(10, 1),
      getTopRate(10, 1),
    ];
    Axios.all(arrApi)
      .then(([resAuthor, resCategories, resTopSell, resTopnew, resTopRate]) => {
        const author = _.get(resAuthor, 'data.payload', []);
        const category = _.get(resCategories, 'data.payload', []);
        const topSell = _.get(resTopSell, 'data.payload', []);
        const topNew = _.get(resTopnew, 'data.payload', []);
        const topRate = _.get(resTopRate, 'data.payload', []);
        setData({
          author,
          category,
          topSell,
          topNew,
          topRate,
        });
        setLoading(false);
        // setDataAuthors(_.get(resAuthor, 'data.payload', []));
        // setDataCategories(_.get(resCategories, 'data.payload', []));
      })
      .catch(err => console.log('ERR:', err));
  };

  // const handleFeature = () => navigation.navigate(FEATURE);

  // const seeAllPath = (title, items) =>
  //   navigation.navigate(PATHS, {items, title});

  // const handleDetailPath = () =>
  //   navigation.navigate(PATHDETAIL, {title: 'Angular denver 2019'});

  const handleDetailAuthor = id => navigation.navigate(AUTHORDETAIL, {id});

  const handleSignin = () => navigation.navigate(LOGIN);

  const handleSeeAll = (title, items) =>
    navigation.navigate(LISTCOURSE, {items, title});

  const handleDetailCourse = (screen, id) => navigation.navigate(screen, {id});

  // const handleDetailSkill = title => navigation.navigate(SKILL, {title});

  if (loading) {
    return <Loading />;
  }

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <ScrollView>
        {!state.isAuth && (
          <View style={{margin: 25}}>
            <Text
              style={StyleSheet.compose(
                {fontWeight: 'bold', fontSize: 23},
                colors.text,
              )}>
              Sign in to skill up to day
            </Text>
            <Text
              style={StyleSheet.compose(
                {fontSize: 18, marginVertical: 5},
                colors.text,
              )}>
              Keep your skills up-to-date with access to thousands if courses by
              industry experts.
            </Text>
            <TouchableOpacity
              onPress={handleSignin}
              style={StyleSheet.compose(
                {borderRadius: 6, marginTop: 5},
                colors.bgBtn,
              )}>
              <Text
                style={{
                  color: 'white',
                  textTransform: 'uppercase',
                  alignSelf: 'center',
                  fontSize: 18,
                  paddingVertical: 8,
                }}>
                Sign in to start watching
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <CourseScroll
          title="Khóa học bán chạy"
          items={_.get(data, 'topSell', [])}
          handleSeeAll={handleSeeAll}
          handleDetail={handleDetailCourse}
        />
        <CourseScroll
          title="Khóa học mới"
          items={_.get(data, 'topNew', [])}
          handleSeeAll={handleSeeAll}
          handleDetail={handleDetailCourse}
        />
        <CourseScroll
          title="Khóa học đánh giá cao"
          items={_.get(data, 'topRate', [])}
          handleSeeAll={handleSeeAll}
          handleDetail={handleDetailCourse}
        />
        {/* <PathScroll
          handleSeeAll={seeAllPath}
          handleDetail={handleDetailPath}
          title="Danh mục"
          items={_.get(data, 'category', [])}
        /> */}
        <AuthorScroll
          handleDetail={handleDetailAuthor}
          title="Tác giả"
          items={_.get(data, 'author', [])}
        />
      </ScrollView>
    </View>
  );
}
