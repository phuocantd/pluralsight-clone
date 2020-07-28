import React, {useState, useEffect, useContext} from 'react';
import {Image, StyleSheet, ScrollView, View, Text} from 'react-native';
import axios from 'axios';
import _ from 'lodash';

import {LISTCOURSE} from 'global/constants';
import CourseScroll from 'components/scrollHorizontal/courses';
import {getRecommend, getIntro, getFavourite, getProgress} from 'api/user';
import Loading from 'src/components/Loading';
import {Stores} from 'src/tools/context/stores';
import {AuthContext} from 'src/tools/context/auth';

export default function AuthHome({navigation, colors}) {
  const {profile} = useContext(Stores);
  const {state} = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    const arrReq = [
      getRecommend(profile.id),
      getIntro(),
      getFavourite(state.token),
      getProgress(state.token),
    ];
    axios
      .all(arrReq)
      .then(([resRecommend, resIntro, resFavourite, resProgress]) => {
        const recommend = _.get(resRecommend, 'data.payload', []) || [];
        const intro = _.get(resIntro, 'data', {}) || {};
        const favourite = _.get(resFavourite, 'data.payload', []) || [];
        const progress = _.get(resProgress, 'data.payload', []) || [];
        setData({recommend, intro, favourite, progress});
        setLoading(false);
      })
      .catch(err => console.log('ERR:', err));
  };

  const handleSeeAll = (title, items) =>
    navigation.navigate(LISTCOURSE, {items, title});

  const handleDetailCourse = (screen, id) => navigation.navigate(screen, {id});

  if (loading) {
    return <Loading />;
  }
  console.log('home', data);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://financesonline.com/uploads/2019/08/Pluralsight-logo1.png',
        }}
      />
      {/* <View>
        <Text style={colors.text}>
          Danh mục: {_.get(data, 'intro.categories')}
        </Text>
        <Text style={colors.text}>
          Giáo viên: {_.get(data, 'intro.instructors')}
        </Text>
        <Text style={colors.text}>
          Khóa học: {_.get(data, 'intro.courses')}
        </Text>
      </View> */}
      <CourseScroll
        title="Đề xuất cho bạn"
        items={_.get(data, 'recommend', [])}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      />
      <CourseScroll
        self
        title="Khóa học yêu thích"
        items={_.get(data, 'favourite', [])}
        handleDetail={handleDetailCourse}
      />
      <CourseScroll
        self
        title="Khóa học đang học"
        items={_.get(data, 'progress', [])}
        handleDetail={handleDetailCourse}
      />
      {/*
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
      /> */}
      {/* <CourseScroll
        title={securityProfessional.title}
        items={securityProfessional.listCourse}
        handleSeeAll={handleSeeAll}
        handleDetail={handleDetailCourse}
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {height: 100},
});
